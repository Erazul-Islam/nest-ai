import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EmailModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
