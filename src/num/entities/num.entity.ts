import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Num {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;
}
