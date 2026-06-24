/**
 * Check Box Page — demoqa.com/checkbox
 * @author Tawheed Wani
 */

import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class CheckBoxPage extends BasePage {
  readonly expandAllBtn = this.page.locator('button[title="Expand all"]');
  readonly homeCheckbox = this.page.locator('.rct-checkbox').first();
  readonly resultOutput = this.page.locator('.display-result');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/checkbox');
  }

  async expandAll(): Promise<void> {
    await this.click(this.expandAllBtn, 'Expand All');
  }

  async checkItem(label: string): Promise<void> {
    const item = this.page.locator('.rct-node').filter({ hasText: label }).locator('.rct-checkbox').first();
    await this.click(item, `Checkbox: ${label}`);
  }

  async getSelectedItems(): Promise<string[]> {
    return this.resultOutput.allTextContents();
  }
}
