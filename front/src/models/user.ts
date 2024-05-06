import { Document } from "./document";
export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    birdthdate: string,
    document: Document,

}