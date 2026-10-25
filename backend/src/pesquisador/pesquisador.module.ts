import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PesquisadorController } from './pesquisador.controller.js';
import { PesquisadorService } from './pesquisador.service.js';
import { Pesquisador } from './pesquisador.entity.js';
import { Usuario } from '../usuario/usuario.entity.js';

@Module({
    imports: [TypeOrmModule.forFeature([Pesquisador, Usuario])],
    controllers: [PesquisadorController],
    providers: [PesquisadorService],
})
export class PesquisadorModule {}