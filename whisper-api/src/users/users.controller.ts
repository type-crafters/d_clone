import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import type { ILoginRequest } from "../lib/ILoginRequest";

@Controller("users")
export class UsersController {
    private readonly usersService: UsersService;

    constructor(usersService: UsersService) {
        this.usersService = usersService;
    }

    @Get()
    public getUsers() {
        
    }

    @Post("login")
    public postLogin(@Body() body: ILoginRequest) {
         
    }
}