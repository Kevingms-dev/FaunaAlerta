import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especies } from './especies.entity.js';

@Injectable()
export class EspeciesService {
    constructor(
        @InjectRepository(Especies)
        private especiesRepository: Repository<Especies>,
    ) {}

    async findAll(): Promise<Especies[]> {
        return await this.especiesRepository.find();
    }

    async create(data: Partial<Especies>): Promise<Especies> {
        const novaEspecies = this.especiesRepository.create(data);
        return await this.especiesRepository.save(novaEspecies)
    }
}