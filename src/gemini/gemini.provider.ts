import { GoogleGenAI } from '@google/genai';
import { ConfigService } from '@nestjs/config';

export const GeminiProvider = {
  provide: 'GEMINI_CLIENT',
  useFactory: (configService: ConfigService) => {
    return new GoogleGenAI({
      apiKey: configService.get<string>('GEMINI_API_KEY'),
    });
  },
  inject: [ConfigService],
};
