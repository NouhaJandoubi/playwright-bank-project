import { defineConfig } from '@playwright/test';
import { ENV } from './config/env';

export default defineConfig({
  use: {
    baseURL: ENV.BASE_URL,
    headless: true,
  },
});