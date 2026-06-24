/**
 * Check Box Tests — demoqa.com/checkbox
 * @author Tawheed Wani
 * @module tests/checkbox
 */

import { test, expect } from '../src/fixtures/page-fixtures';
import { step } from '../src/utils/allure-helper';

test.describe('Check Box', () => {
  test.beforeEach(async ({ checkBoxPage }) => {
    await checkBoxPage.open();
  });

  test('should expand all nodes', async ({ checkBoxPage, page }) => {
    await step('Click Expand All', async () => {
      await checkBoxPage.expandAll();
    });

    await step('Verify child nodes are visible', async () => {
      const items = page.locator('.rct-node-leaf');
      await expect(items.first()).toBeVisible();
    });
  });

  test('should select Home checkbox and show result', async ({ checkBoxPage }) => {
    await step('Select Home checkbox', async () => {
      await checkBoxPage.click(checkBoxPage.homeCheckbox, 'Home');
    });

    await step('Verify result is displayed', async () => {
      await checkBoxPage.assertVisible(checkBoxPage.resultOutput.first(), 'Result Output');
    });
  });

  test('should select a specific item after expanding', async ({ checkBoxPage }) => {
    await step('Expand all items', async () => {
      await checkBoxPage.expandAll();
    });

    await step('Check Desktop item', async () => {
      await checkBoxPage.checkItem('Desktop');
    });

    await step('Verify result contains desktop items', async () => {
      const results = await checkBoxPage.getSelectedItems();
      const combined = results.join(' ').toLowerCase();
      expect(combined).toContain('desktop');
    });
  });
});
