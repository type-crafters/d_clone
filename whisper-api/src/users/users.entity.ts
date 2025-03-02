import { Entity, Column, ObjectIdColumn, Index } from "typeorm";
import type { AccountStatus } from "../lib/AccountStatus";

@Entity("users")
export class UsersEntity {
    @ObjectIdColumn()
    _id!: string;

    @Index({unique: true})
    @Column()
    email!: string;

    @Column()
    accountName!: string;

    @Column()
    callSign!: string;

    @Column()
    passwordHash!: string;

    @Column()
    passwordSalt!: string;

    @Column()
    birthDate!: Date;

    @Column()
    creationDate!: Date;

    @Column()
    isVerified!: boolean;

    @Column()
    status!: AccountStatus;
}