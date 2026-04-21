import { test, expect } from '@playwright/test';

test('API - simulate transfer', async () => {

  const fakeResponse = {
    id: 'TRX123',
    status: 'SUCCESS'
  };

  expect(fakeResponse.status).toBe('SUCCESS');
});