import { Locations } from "src/location/entities/location.entity";
import { ManyToOne, OneToMany } from "typeorm";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Users')
export class Users {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    password: string;

    @ManyToOne(type => Locations,{nullable:false}) @JoinColumn()
    location: Locations;
}