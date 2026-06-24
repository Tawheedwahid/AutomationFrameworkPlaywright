/**
 * Login Tests — demoqa.com/login
 * @author Tawheed Wani
 * @module tests/login
 */

import { test, expect } from '../src/fixtures/page-fixtures';
import { loadTestData } from '../src/utils/test-data-manager';
import { step } from '../src/utils/allure-helper';

interface LoginData {
  invalidUsers: Array<{ username: string; password: string; scenario: string }>;
}

const testData = loadTestData<LoginData>('login');

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('should display login form elements', async ({ loginPage }) => {
    await step('Assert username input visible', async () => {
      await loginPage.assertVisible(loginPage.usernameInput, 'Username Input');
    });

    await step('Assert password input visible', async () => {
      await loginPage.assertVisible(loginPage.passwordInput, 'Password Input');
    });

    await step('Assert login button visible', async () => {
      await loginPage.assertVisible(loginPage.loginBtn, 'Login Button');
    });
  });

  test('should display new user registration button', async ({ loginPage }) => {
    await step('Assert New User button visible', async () => {
      await loginPage.assertVisible(loginPage.newUserBtn, 'New User Button');
    });
  });

  for (const user of testData.invalidUsers) {
    test(`should show error for scenario: ${user.scenario}`, async ({ loginPage, page }) => {
      test.skip(user.username === '', 'Empty credential submit not testable via HTML5 validation');

      await step(`Login with ${user.scenario}`, async () => {
        await loginPage.login(user.username, user.password);
      });

      await step('Assert URL stays on login page', async () => {
        await expect(page).toHaveURL(/\/login/);
      });
    });
  }
});
