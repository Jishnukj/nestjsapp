import { Subloc } from "src/subloc/entities/subloc.entity";
import { OneToMany } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('locations')
export class Locations{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column({type: 'varchar', length:100, nullable:false})
    location:string;

    @Column({type: 'int', nullable:false})
    pincode:number;
    
    // this will not create column
    @OneToMany(() => Subloc, subloc=>subloc.locations)
    sublocs: Subloc[];
}