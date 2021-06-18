import { Connection } from "typeorm";
import { Location } from "./entities/location.entity";

export const locationproviders = [
    {
        provide:'LOCATION_REPO',
        useFactory: (connection: Connection)=> connection.getRepository(Location),
        inject: ['DATABASE_CONNECTION']
    }
]