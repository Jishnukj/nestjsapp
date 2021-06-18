import { Connection } from "typeorm";
import { Locations } from "./entities/location.entity";

export const locationproviders = [
    {
        provide:'LOCATION_REPO',
        useFactory: (connection: Connection)=> connection.getRepository(Locations),
        inject: ['DATABASE_CONNECTION']
    }
]