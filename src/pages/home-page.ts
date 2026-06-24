/**
 * Home Page — demoqa.com landing page
 * @author Tawheed Wani
 */

import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly cards = this.page.locator('.card.mt-4.top-card');
  readonly banner = this.page.locator('.home-banner');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async getCardTitles(): Promise<string[]> {
    return this.cards.locator('.card-body h5').allTextContents();
  }

  async clickCard(title: string): Promise<void> {
    await this.click(
      this.cards.filter({ hasText: title }).first(),
      `Card: ${title}`
    );
  }
}
