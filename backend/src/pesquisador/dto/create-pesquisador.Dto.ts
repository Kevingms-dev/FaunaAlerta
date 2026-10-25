import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePesquisadorDto {
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  instituicao: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  areaPesquisa: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  linkLattesOrcid?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  emailInstituicional: string;
}