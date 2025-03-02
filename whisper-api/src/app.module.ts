import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            type: "mongodb",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT!),
            username: process.env.DB_USER,
            database: process.env.DB_NAME
        })
    ],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}