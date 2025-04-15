import { Document } from "mongoose";
import type { ParamVersion } from "./param-version.interface";

export interface Param extends Document {
    readonly paramName: string;
    readonly description: string;
    readonly paramValue: ParamVersion[];
    readonly type: string;
    readonly encrypted: boolean;
}

