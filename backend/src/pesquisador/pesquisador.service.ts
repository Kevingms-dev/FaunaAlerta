import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pesquisador } from './pesquisador.entity.js';
import { CreatePesquisadorDto } from './dto/create-pesquisador.Dto.js';
import { Usuario } from '../usuario/usuario.entity.js';

@Injectable()
export class PesquisadorService {
    constructor(
        @InjectRepository(Pesquisador)
        private readonly pesquisadorRepository: Repository<Pesquisador>,

        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async findAll(): Promise<Pesquisador[]> {
        return await this.pesquisadorRepository.find({ relations: { usuario: true } });
    }

    async create(dto: CreatePesquisadorDto): Promise<Pesquisador> {
        const usuario = await this.usuarioRepository.findOne({ where: { id: dto.usuarioId } });
        if (!usuario) {
            throw new NotFoundException('Usuário associaso não encontrado.');
        }

        const emailExiste = await this.pesquisadorRepository.findOne({
            where: {emailInstituicional: dto.emailInstituicional },
        });
        if (emailExiste) {
            throw new ConflictException('E-mail institucional já cadastrado no sistema.');
        }

        const novoPesquisador = this.pesquisadorRepository.create({
            ...dto,
            usuarioId: dto.usuarioId,
        });

        return await this.pesquisadorRepository.save(novoPesquisador)
    }
}