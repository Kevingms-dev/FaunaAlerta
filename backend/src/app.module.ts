import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Especies } from './especies/especies.entity.js';
import { EspeciesModule } from './especies/especies.module.js';
import { Usuario } from './usuario/usuario.entity.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { Pesquisador } from './pesquisador/pesquisador.entity.js';
import { PesquisadorModule } from './pesquisador/pesquisador.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mysql',
        host: ConfigService.get<string>('DB_HOST'),
        port: ConfigService.get<number>('DB_PORT'),
        username: ConfigService.get<string>('DB_USER'),
        password: ConfigService.get<string>('DB_PASSWORD'),
        database: ConfigService.get<string>('DB_NAME'),

        entities: [Especies, Usuario, Pesquisador],

        // IMPORTANTE: Quando for mexer em algo no banco de dados
        // mude para false(f minusculo), assim vc evita que as tabelas
        // de atualizar automaticamente.
        // Quando terminar de mexer mude para true(t minusculo)
        synchronize: false,
      }),
    }),
    EspeciesModule,
    UsuarioModule,
    PesquisadorModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
