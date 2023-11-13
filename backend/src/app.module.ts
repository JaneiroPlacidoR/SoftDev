import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { ReporttimeonModule } from './reporttimeon/reporttimeon.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://travely:travely@cluster0.dnafy.mongodb.net/SoftBuild'),
    UsersModule,
    AuthModule,
    TasksModule,
    ProjectsModule,
    ReporttimeonModule],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
