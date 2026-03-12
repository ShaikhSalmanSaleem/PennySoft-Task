import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Navbar } from './components/Navbar';

export class LoginPage extends BasePage {
  readonly navbar: Navbar;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.navbar = new Navbar(page);
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.locator('.error-messages li');
  }

  async login(email: string, psw: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(psw);
    await this.signInButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.first().textContent();
  }
}
