import { Controller, Get, Post, Body } from '@nestjs/common';
import { PesquisadorService } from './pesquisador.service.js';
import { CreatePesquisadorDto } from './dto/create-pesquisador.Dto.js';
import { Pesquisador } from './pesquisador.entity.js';

@Controller('pesquisador')
export class PesquisadorController {
    constructor(private readonly pesquisadorService: PesquisadorService) {}

    @Get()
    async findAll(): Promise<Pesquisador[]> {
        return await this.pesquisadorService.findAll();
    }

    @Post()
    async create(@Body() dto: CreatePesquisadorDto): Promise<Pesquisador> {
        return await this.pesquisadorService.create(dto);
    }
}