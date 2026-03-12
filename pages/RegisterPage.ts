import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Navbar } from './components/Navbar';

export class RegisterPage extends BasePage {
  readonly navbar: Navbar;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.navbar = new Navbar(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.locator('.error-messages li');
  }

  async register(username: string, email: string, psw: string) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(psw);
    await this.signUpButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.first().textContent();
  }
}
