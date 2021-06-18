import { Locations } from "src/location/entities/location.entity";
import { ManyToOne, OneToMany } from "typeorm";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Subloc')
export class Subloc {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @ManyToOne(() => Locations, locations=>locations.sublocs)
    locations:Locations
}