/**
 * Radio Button Tests — demoqa.com/radio-button
 * @author Tawheed Wani
 * @module tests/radio-button
 */

import { test, expect } from '../src/fixtures/page-fixtures';
import { loadTestData } from '../src/utils/test-data-manager';
import { step } from '../src/utils/allure-helper';
import { RadioOption } from '../src/pages/radio-button-page';

interface RadioData {
  options: Array<{ label: string; expectedText: string }>;
  disabledOption: { label: string; radioId: string };
}

const testData = loadTestData<RadioData>('radio-button');

test.describe('Radio Button', () => {
  test.beforeEach(async ({ radioButtonPage }) => {
    await radioButtonPage.open();
  });

  for (const option of testData.options) {
    test(`should select "${option.label}" and display correct result`, async ({ radioButtonPage }) => {
      await step(`Select radio: ${option.label}`, async () => {
        await radioButtonPage.selectRadio(option.label as RadioOption);
      });

      await step('Assert result text', async () => {
        const result = await radioButtonPage.getSelectedValue();
        expect(result).toBe(option.expectedText);
      });
    });
  }

  test('should have "No" radio button disabled', async ({ page }) => {
    await page.goto('/radio-button');

    await step('Assert No radio is disabled', async () => {
      const noRadio = page.locator('#noRadio');
      await expect(noRadio).toBeDisabled();
    });
  });
});
