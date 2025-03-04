import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { LoginDTO } from "./dto/login.dto";

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
    public postLogin(@Body() body: LoginDTO) {
        void body;
    }
}