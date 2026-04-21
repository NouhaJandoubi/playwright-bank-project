import { Page, expect } from '@playwright/test';

export class TransferPage {
  constructor(private page: Page) {}

  async makeTransfer(amount: string, iban: string) {
    await this.page.getByRole('textbox', { name: 'Amount' }).fill(amount);
    await this.page.getByRole('textbox', { name: 'IBAN' }).fill(iban);
    await this.page.getByRole('button', { name: 'Send Transfer' }).click();

    await expect(this.page.getByRole('status')).toHaveText('Transfer successful');
  }
}