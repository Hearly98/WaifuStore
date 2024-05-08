import { Roles } from "./roles";
import { User } from "./user";

export interface Worker {
    id: number,
    id_user: User,
    rol: Roles,
}