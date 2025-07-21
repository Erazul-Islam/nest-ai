import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async getAiResponse(@Body('message') message: string) {
    return {
      result: await this.emailService.generateEmail(message),
    };
  }
}
