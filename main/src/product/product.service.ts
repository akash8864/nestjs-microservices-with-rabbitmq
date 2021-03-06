import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  constructor(
      @InjectModel(Product.name) private productModel:Model<ProductDocument>
  ){

  }
  async all(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  async create(data):Promise<Product>
  {
    return new this.productModel(data).save();
  }
}
