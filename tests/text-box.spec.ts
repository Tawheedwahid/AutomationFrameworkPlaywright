/**
 * Text Box Tests — demoqa.com/text-box
 * @author Tawheed Wani
 * @module tests/text-box
 */

import { test, expect } from '../src/fixtures/page-fixtures';
import { loadTestData, randomItem } from '../src/utils/test-data-manager';
import { step, attachJson } from '../src/utils/allure-helper';

interface TextBoxData {
  valid: Array<{ fullName: string; email: string; currentAddress: string; permanentAddress: string }>;
  invalid: Array<{ fullName: string; email: string; currentAddress: string; permanentAddress: string }>;
}

const testData = loadTestData<TextBoxData>('text-box');

test.describe('Text Box', () => {
  test.beforeEach(async ({ textBoxPage }) => {
    await textBoxPage.open();
  });

  test('should submit form and display output for valid data', async ({ textBoxPage }) => {
    const data = randomItem(testData.valid);
    attachJson('Test Input', data);

    await step('Fill and submit text box form', async () => {
      await textBoxPage.fillAndSubmit(data);
    });

    await step('Verify output box is visible', async () => {
      await textBoxPage.assertVisible(textBoxPage.outputBox, 'Output Box');
    });

    await step('Verify submitted name in output', async () => {
      await expect(textBoxPage.outputName).toContainText(data.fullName);
    });

    await step('Verify submitted email in output', async () => {
      await expect(textBoxPage.outputEmail).toContainText(data.email);
    });
  });

  test('should not show output for invalid email', async ({ textBoxPage }) => {
    const data = testData.invalid[0];

    await step('Fill form with invalid data', async () => {
      await textBoxPage.fillAndSubmit(data);
    });

    await step('Verify email field has error state', async () => {
      await expect(textBoxPage.emailInput).toHaveClass(/field-error/);
    });
  });

  for (const data of testData.valid) {
    test(`should accept input for user: ${data.fullName}`, async ({ textBoxPage }) => {
      await step(`Fill form for ${data.fullName}`, async () => {
        await textBoxPage.fillAndSubmit(data);
      });

      await step('Assert output is displayed', async () => {
        await textBoxPage.assertVisible(textBoxPage.outputBox, 'Output Section');
      });
    });
  }
});
