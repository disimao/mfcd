import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category/category.controller';
import { Category } from './models/category.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [Category],
    }),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
