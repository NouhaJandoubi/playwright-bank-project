import { request } from '@playwright/test';
import { ENV } from '../config/env';

export async function createTransfer() {
  const context = await request.newContext({
    baseURL: ENV.API_URL,
  });

  const response = await context.get('/products/1');

  return response;

}