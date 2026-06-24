/**
 * Home Page Tests — demoqa.com landing page
 * @author Tawheed Wani
 * @module tests/home
 */

import { test, expect } from '../src/fixtures/page-fixtures';
import { step } from '../src/utils/allure-helper';

test.describe('Home Page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('should display the page title correctly', async ({ homePage }) => {
    await step('Assert page title', async () => {
      const title = await homePage.getTitle();
      expect(title).toContain('DEMOQA');
    });
  });

  test('should display 6 category cards', async ({ homePage }) => {
    await step('Count category cards', async () => {
      const titles = await homePage.getCardTitles();
      expect(titles.length).toBe(6);
    });
  });

  test('should display expected card categories', async ({ homePage }) => {
    const expectedCards = [
      'Elements',
      'Forms',
      'Alerts, Frame & Windows',
      'Widgets',
      'Interactions',
      'Book Store Application',
    ];

    await step('Verify all category cards present', async () => {
      const titles = await homePage.getCardTitles();
      for (const card of expectedCards) {
        expect(titles).toContain(card);
      }
    });
  });

  test('should navigate to Elements section on card click', async ({ homePage, page }) => {
    await step('Click Elements card', async () => {
      await homePage.clickCard('Elements');
    });

    await step('Assert navigation to elements', async () => {
      await expect(page).toHaveURL(/\/elements/);
    });
  });
});
