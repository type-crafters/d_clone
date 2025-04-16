import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import type { NestExpressApplication } from "@nestjs/platform-express";
import path from "path";

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setGlobalPrefix("admin")
    app.useStaticAssets(path.join(import.meta.dirname, "..", "public"));
    app.setViewEngine("ejs")
    app.setBaseViewsDir(path.join(import.meta.dirname, "views"));
    
    const host = process.env.HOST ?? "127.0.0.1";
    const port = process.env.PORT ?? 3300;
    
    await app.listen(port, () => console.log("Server is listening at http://%s:%d/", host, port));
})();