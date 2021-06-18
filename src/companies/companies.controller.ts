import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Company } from './company.entity';
import { CompaniesService } from './companies.service';
@Crud({model:{
    type: Company
}})
@Controller('companies')
export class CompaniesController{
    constructor(public service: CompaniesService){}
}
