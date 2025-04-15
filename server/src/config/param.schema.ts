import { APP_PARAMS } from "@/constants";
import { Schema } from "mongoose";

export const ParamVersionSchema = new Schema({
    version: Number,
    value: Schema.Types.Mixed,
    modifiedBy: String,
    modifiedAt: Date,
    head: Boolean
}, { _id: false });

export const ParamSchema = new Schema({
    paramName: String,
    description: String,
    paramValue: [ParamVersionSchema],
    type: String,
    encrypted: Boolean
}, { collection: APP_PARAMS });


