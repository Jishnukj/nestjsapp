import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Company } from './company.entity';
@Injectable()
export class CompaniesService{
    constructor(){
        
    }
}

// export class CompaniesService extends TypeOrmCrudService<Company>{
//     constructor(@InjectRepository(Company) repo){
//         super(repo);
//     }
// }
