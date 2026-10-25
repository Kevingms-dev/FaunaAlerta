import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(250)
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(70)
    email: string;

    @IsString()
    @IsOptional()
    @MaxLength(20)
    telefone?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    senha: string;

    @IsEnum(['Usuario', 'Pesquisador', 'Orgao', 'Admin'])
    @IsOptional()
    perfil?: 'Usuario' | 'Pesquisador' | 'Orgao' | 'Admin';
}