import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Especies')
export class Especies {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true})
    id: number;

    @Column({ name: 'nome_popular', type: 'varchar', length: 120, unique: true, nullable: false})
    nomePopular: string;

    @Column({ name: 'nome_cientifico', type: 'varchar', length: 150, unique: true, nullable: false})
    nomeCientifico: string;

    @Column({
        type: 'enum',
        enum: ['NATIVA', 'EXOTICA', 'EXOTICA_INVASORA'],
        nullable: false
    })
    origem: string;

    @Column({
        name: 'status_conservacao',
        type: 'enum',
        enum: ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'DD', 'NE'],
        default: 'NE',
        nullable: false
    })
    statusConservacao: string;

    @Column({ type: 'text', nullable: true})
    descricao: string;

    @Column({ name: 'imagem_url', type: 'varchar', length: 500, nullable: true})
    imagemUrl: string;
}   