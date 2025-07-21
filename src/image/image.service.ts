import { GoogleGenAI, Modality } from '@google/genai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  private gemini: GoogleGenAI;

  constructor() {
    this.gemini = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async generateImage(message: string) {
    const res = await this.gemini.models.generateContent({
      model: 'gemini-2.0-flash-preview-image-generation',
      contents: message,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    let base64Image: string | null = null;
    let textResponse: string | null = null;

    const canididates = res?.candidates;

    if (canididates && canididates.length > 0) {
      const parts = canididates[0].content?.parts ?? [];

      for (const part of parts) {
        if ('text' in part && part.text) {
          textResponse = part.text;
        } else if ('inlineData' in part && part.inlineData?.data) {
          base64Image = part.inlineData.data;
        }
      }
    }

    return { textResponse, base64Image };
  }
}
