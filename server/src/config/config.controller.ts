import { Controller, Get, Param } from "@nestjs/common";
import { ParamService } from "./param.service";

@Controller("config")
export class ConfigController {
    constructor(private readonly paramService: ParamService) { }

    @Get(":key")
    public async getParameter(@Param("key") key: string) {
        return this.paramService.getParameter(key) ?? "NULL";
    }

}

