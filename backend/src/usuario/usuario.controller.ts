import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { Usuario } from './usuario.entity.js';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async finaAll(): Promise<Usuario[]> {
        return await this.usuarioService.findAll();
    }

    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return await this.usuarioService.create(createUsuarioDto);
    }
}