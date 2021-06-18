import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('location')
export class Location{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column({type: 'varchar', length:100, nullable:false})
    location:string;

    @Column({type: 'int', nullable:false})
    pincode:number;
}