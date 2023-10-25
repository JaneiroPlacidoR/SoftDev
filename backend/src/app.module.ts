import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://travely:travely@cluster0.dnafy.mongodb.net/SoftBuild'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
