/**
 * Custom Playwright Fixtures — shared page object instances per test
 * @author Tawheed Wani
 */

import { test as base } from '@playwright/test';
import {
  HomePage,
  TextBoxPage,
  LoginPage,
  CheckBoxPage,
  RadioButtonPage,
} from '@pages/index';

type PageFixtures = {
  homePage: HomePage;
  textBoxPage: TextBoxPage;
  loginPage: LoginPage;
  checkBoxPage: CheckBoxPage;
  radioButtonPage: RadioButtonPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  textBoxPage: async ({ page }, use) => use(new TextBoxPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  checkBoxPage: async ({ page }, use) => use(new CheckBoxPage(page)),
  radioButtonPage: async ({ page }, use) => use(new RadioButtonPage(page)),
});

export { expect } from '@playwright/test';
