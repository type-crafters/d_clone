import { PARAM_MODEL } from "@/constants";
import { Inject, Injectable } from "@nestjs/common";
import type { Model } from "mongoose";
import type { Param } from "./interface/param.interface";

@Injectable()
export class ParamService {
    constructor(@Inject(PARAM_MODEL) private readonly paramModel: Model<Param>) { }

    public async getParameter(key: string): Promise<any> {
        const all = await this.paramModel.find().exec(); // returns []


        const parameter = await this.paramModel.findOne({ paramName: key }).exec();
        const value = parameter?.paramValue.find((version) => version.head)?.value;

        return value ?? null;
    }
}