/**
 * Login Page — demoqa.com/login
 * @author Tawheed Wani
 */

import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#userName');
  readonly passwordInput = this.page.locator('#password');
  readonly loginBtn = this.page.locator('#login');
  readonly newUserBtn = this.page.locator('#newUser');
  readonly loginError = this.page.locator('#name');  // error message label after failed login

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username, 'Username');
    await this.fill(this.passwordInput, password, 'Password');
    await this.click(this.loginBtn, 'Login');
  }
}
