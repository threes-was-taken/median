import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from 'nestjs-prisma';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
