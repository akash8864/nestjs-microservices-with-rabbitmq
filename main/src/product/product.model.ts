import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type ProductDocument=Product&Document;
@Schema()
export class Product
{
    @Prop()
    id:number;
    @Prop()
    title:String;
    @Prop()
    image:String;
    @Prop()
    likes:String;
}
export const ProductSchema=SchemaFactory.createForClass(Product);