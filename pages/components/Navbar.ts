import { Locator, Page } from '@playwright/test';

export class Navbar {
  private readonly page: Page;
  readonly homeLink: Locator;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;
  readonly userProfileLink: Locator;
  readonly settingsLink: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.userProfileLink = page.locator('.nav-link .user-pic').locator('..');
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickSettings() {
    await this.settingsLink.click();
  }

  async clickUsername(username: string) {
    await this.page.getByRole('link', { name: username }).click();
  }

  async isUsernameVisible(username: string): Promise<boolean> {
    return await this.page.getByRole('link', { name: username }).isVisible();
  }
}
