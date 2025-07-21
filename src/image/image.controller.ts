import { Body, Controller, Post } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  async getAiImage(@Body('message') message: string) {
    return {
      result: await this.imageService.generateImage(message),
    };
  }
}
