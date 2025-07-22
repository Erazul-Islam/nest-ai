import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { ImageModule } from './image/image.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EmailModule,
    ImageModule,
    UserModule,
    MongooseModule.forRoot(process.env.DATABASE_URL as string),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
