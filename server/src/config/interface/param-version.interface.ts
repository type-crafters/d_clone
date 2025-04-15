import type { Document } from "mongoose";


export interface ParamVersion extends Document {
    version: number;
    value: any;
    modifiedBy: string;
    modifiedAt: Date;
    head: boolean;
}
