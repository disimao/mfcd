import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { Category } from '../models/category.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoryController {

  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ){

  }

  @Get()
  async index(): Promise<Category[]>{
    return this.categoryRepo.find()
  }

  @Get(':id')
  show(@Param('id') id:string): Promise<Category>{
    return this.categoryRepo.findOneOrFail(id)
  }

  @Post()
  async store(@Body() body: Category): Promise<Category>{
    const category: Category = this.categoryRepo.create(body);
    return this.categoryRepo.save(category);
  }
}
