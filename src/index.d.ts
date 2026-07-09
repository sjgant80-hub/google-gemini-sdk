/**
 * google-gemini-sdk TypeScript declarations
 */
export interface GoogleGeminiOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class GoogleGemini {
  constructor(options?: GoogleGeminiOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default GoogleGemini;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
