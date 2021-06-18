import { Connection } from "typeorm";
import { Users } from "./entities/user.entity";

export const userProvider = [
    {
        provide:'USER_REPO',
        useFactory: (connection: Connection)=> connection.getRepository(Users),
        inject: ['DATABASE_CONNECTION']
    }
]