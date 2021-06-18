import { Connection } from "typeorm";
import { Subloc } from "./entities/subloc.entity";

export const Sublocationproviders = [
    {
        provide:'SUBLOCATION_REPO',
        useFactory: (connection: Connection)=> connection.getRepository(Subloc),
        inject: ['DATABASE_CONNECTION']
    }
]