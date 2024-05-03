import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Restaurant } from "./entity/Restaurant"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    synchronize: true,  
    logging: false,
    entities: [User, Restaurant],
    migrations: [],
    subscribers: [],
})
