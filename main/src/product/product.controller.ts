import { Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import EventEmitter from 'events';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async index() {
    return await this.service.all();
  }
  @EventPattern('product_created')
  async hello(product:any) {
   await this.service.create({
      id:product.id,
      title:product.title,
      image:product.image,
      likes:product.likes,
      
    });
    
  }
}
