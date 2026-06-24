/**
 * Text Box Page — demoqa.com/text-box
 * @author Tawheed Wani
 */

import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export interface TextBoxFormData {
  fullName: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
}

export class TextBoxPage extends BasePage {
  readonly fullNameInput = this.page.locator('#userName');
  readonly emailInput = this.page.locator('#userEmail');
  readonly currentAddressInput = this.page.locator('#currentAddress');
  readonly permanentAddressInput = this.page.locator('#permanentAddress');
  readonly submitBtn = this.page.locator('#submit');
  readonly outputBox = this.page.locator('#output');
  readonly outputName = this.page.locator('#name');
  readonly outputEmail = this.page.locator('#email');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/text-box');
  }

  async fillAndSubmit(data: TextBoxFormData): Promise<void> {
    await this.fill(this.fullNameInput, data.fullName, 'Full Name');
    await this.fill(this.emailInput, data.email, 'Email');
    await this.fill(this.currentAddressInput, data.currentAddress, 'Current Address');
    await this.fill(this.permanentAddressInput, data.permanentAddress, 'Permanent Address');
    await this.click(this.submitBtn, 'Submit');
  }
}
