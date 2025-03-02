import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

(async () => {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new ValidationPipe());
  
    const port = (process.env.PORT ?? 3000) as number;
    await app.listen(port, () => console.log("Server running at http://127.0.0.1:%d/", port));
})();