import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base-entity';

@Entity('companies')
export class Company extends BaseEntity {
    @Column({type: 'varchar', length:100, nullable:false})
    name:string;

    @Column({type: 'varchar', length:100, nullable:false})
    domain:string;

    @Column({type: 'varchar', length:100, nullable:false})
    description:string;

}