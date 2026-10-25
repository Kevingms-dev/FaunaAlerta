import { IsString, IsNotEmpty, IsEnum, IsOptional, MaxLength } from 'class-validator';

export class CreateEspecieDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(120)
    nomePopular: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    nomeCientifico: string;

    @IsEnum(['NATIVA', 'EXOTICA', 'EXOTICA_INVASORA'])
    @IsNotEmpty()
    origem: string;

    @IsEnum(['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'DD', 'NE'])
    @IsOptional()
    statusConservacao?: string;

    @IsString()
    @IsOptional()
    descricao?: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    imagemUrl?: string;
}