import { Document } from "./document";
export interface User {
    id: number,
    name: string,
    username: string,
    password: string,
    birthdate: string,
    documentType: Document,
    document: string,
}