import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base-entity';

@Entity('testresource')
export class Testresource extends BaseEntity {
    @Column({type: 'varchar', length:100, nullable:false})
    name:string;

    @Column({type: 'varchar', length:100, nullable:false})
    domain:string;

    @Column({type: 'varchar', length:100, nullable:false})
    description:string;
}
