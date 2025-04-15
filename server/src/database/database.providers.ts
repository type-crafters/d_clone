import { MONGO_DB, MYSQL } from "@/constants";
import mongoose, { Mongoose } from "mongoose";
import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: MONGO_DB,
        useFactory: (): Promise<Mongoose> =>
            mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`)
    },
    {
        provide: MYSQL,
        useFactory: () => new DataSource({
            type: "mysql",
            host: process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT!),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            entities: ["src/**/*.entity.{js,ts}"]
        }).initialize()
    }
];