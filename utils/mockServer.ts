import { Page } from '@playwright/test';

export async function setupMock(page: Page) {

  await page.route('**/api/login', route =>
    route.fulfill({
      status: 200,
      body: JSON.stringify({ token: 'fake-token' })
    })
  );

  await page.route('**/api/transfers', route =>
    route.fulfill({
      status: 200,
      body: JSON.stringify({
        id: 'TRX123',
        status: 'SUCCESS'
      })
    })
  );
}