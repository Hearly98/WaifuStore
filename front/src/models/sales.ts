import { Client } from "./client";
import { Product } from "./product";

export interface Header {
    id: number; 
    code: string;
    cantidad: number;
    amount: number;
    date: Date; 
    product: Product; 
    client: Client; 
  }
  