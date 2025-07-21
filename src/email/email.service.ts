import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  private gemini: GoogleGenAI;

  constructor() {
    this.gemini = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async generateEmail(message: string) {
    const response = await this.gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
    });

    return response.text;
  }
}
