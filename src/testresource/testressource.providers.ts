import { Connection, Repository } from "typeorm";
import { Testresource } from "./entities/testresource.entity";
import { TestresourceService } from "./testresource.service";

export const testresourceProviders =[
    {
        provide:'TEST_REPO',
        useFactory:(connection: Connection)=> connection.getRepository(Testresource),
        inject:['DATABASE_CONNECTION']
    }
]