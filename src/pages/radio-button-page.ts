/**
 * Radio Button Page — demoqa.com/radio-button
 * @author Tawheed Wani
 */

import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export type RadioOption = 'Yes' | 'Impressive' | 'No';

export class RadioButtonPage extends BasePage {
  readonly resultText = this.page.locator('.mt-3 span.text-success');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/radio-button');
  }

  async selectRadio(option: RadioOption): Promise<void> {
    await this.click(
      this.page.locator(`label[for="${option.toLowerCase()}Radio"]`),
      `Radio: ${option}`
    );
  }

  async getSelectedValue(): Promise<string> {
    return this.resultText.innerText();
  }
}
