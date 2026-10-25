import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity.js';    
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    // Verificar se o e-mail já existe
    const usuarioExiste = await this.usuarioRepository.findOne({
      where: { email: createUsuarioDto.email },
    });

    if (usuarioExiste) {
      throw new ConflictException('E-mail já cadastrado no sistema.');
    }

    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(createUsuarioDto.senha, salt);

    const novoUsuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      senhaHash,
      });

    return await this.usuarioRepository.save(novoUsuario);
  }

}