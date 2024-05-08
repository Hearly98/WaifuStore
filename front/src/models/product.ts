import { Brand } from "./brand";
import { Category } from "./category";
export interface Product{
    id: number,
    code: string,
    name: string,
    brand: Brand,
    category:Category,
    amount:number,
    description:string,
    image:string,
    stock:number,
    publishDate:string
}