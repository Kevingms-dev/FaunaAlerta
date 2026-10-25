import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity.js';

@Entity('pesquisador')
export class Pesquisador {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number;

    @Column({ name: 'usuario_id', type: 'int', unsigned: true, nullable: true })
    usuarioId: number;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ type: 'varchar', length: 200, nullable: false })
    instituicao: string;

    @Column({ name: 'area_pesquisa', type: 'varchar', length: 150, nullable: false })
    areaPesquisa: string;

    @Column({ name: 'link_lattes_orcid', type: 'varchar', length: 255, nullable: true })
    linkLattesOrcid: string;

    @Column({ name: 'email_instituicional', type: 'varchar', length: 150, unique: true, nullable: false })
    emailInstituicional: string;
}