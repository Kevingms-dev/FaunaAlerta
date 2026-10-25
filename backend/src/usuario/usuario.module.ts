import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioService } from "./usuario.service.js";
import { UsuarioController } from "./usuario.controller.js";
import { Usuario } from "./usuario.entity.js";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {}