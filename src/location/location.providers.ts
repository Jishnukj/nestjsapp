import { Connection } from "typeorm";
import { LocationOn } from "./entities/location.entity";

export const locationproviders = [
    {
        provide:'LOCATION_REPO',
        useFactory: (connection: Connection)=> connection.getRepository(LocationOn),
        inject: ['DATABASE_CONNECTION']
    }
]