import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { TransferPage } from '../../pages/TransferPage';
import { setupMock } from '../../utils/mockServer';
import { testData } from '../../fixtures/testData';

test('User can make a transfer', async ({ page }) => {

  await setupMock(page);

  await page.goto('http://localhost:3000');

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const transfer = new TransferPage(page);

  await login.login(
    testData.user.email,
    testData.user.password
  );

  await dashboard.isVisible();

  await transfer.makeTransfer(
    testData.transfer.amount,
    testData.transfer.iban
  );

});