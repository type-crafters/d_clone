import { APP_PARAMS, MONGO_DB, PARAM_MODEL } from "@/constants";
import type { Connection } from "mongoose";
import { ParamSchema } from "./param.schema";

export const paramProviders = [
    {
        provide: PARAM_MODEL,
        useFactory: (connection: Connection) => connection.model(APP_PARAMS, ParamSchema),
        inject: [MONGO_DB]
    }
]