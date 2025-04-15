import { Module } from "@nestjs/common";
import { ConfigController } from "./config.controller";
import { ParamService } from "./param.service";
import { paramProviders } from "./param.providers";

@Module({
    imports: [],
    controllers: [ConfigController],
    providers: [ParamService, ...paramProviders],
    exports: [ParamService]
})
export class ConfigModule { }