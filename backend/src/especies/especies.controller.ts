import { Body, Controller, Get, Post } from "@nestjs/common";
import { EspeciesService } from "./especies.service.js";
import { Especies } from "./especies.entity.js";
import { CreateEspecieDto } from "./dto/create-especie.dto.js";

@Controller('especies')
export class EspeciesController {
    constructor(private readonly especiesService: EspeciesService) {}

    @Get()
    async findAll(): Promise<Especies[]> {
        return await this.especiesService.findAll();
    }

    @Post()
    async create(@Body() createEspecieDto: CreateEspecieDto): Promise<Especies> {
        return await this.especiesService.create(createEspecieDto);
    }
}