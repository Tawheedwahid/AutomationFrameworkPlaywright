/**
 * Base Page Object — common page interaction helpers
 * @author Tawheed Wani
 */

import { Page, Locator, expect } from '@playwright/test';
import logger from '@utils/logger';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigate(path = ''): Promise<void> {
    logger.info(`Navigating to: ${path || '/'}`);
    await this.page.goto(path);
  }

  async click(locator: Locator, description = ''): Promise<void> {
    logger.info(`Clicking: ${description || locator}`);
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  async fill(locator: Locator, value: string, description = ''): Promise<void> {
    logger.info(`Filling "${description || locator}" with "${value}"`);
    await locator.clear();
    await locator.fill(value);
  }

  async assertVisible(locator: Locator, description = ''): Promise<void> {
    logger.info(`Asserting visible: ${description || locator}`);
    await expect(locator).toBeVisible();
  }

  async assertText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  getTitle(): Promise<string> {
    return this.page.title();
  }
}
