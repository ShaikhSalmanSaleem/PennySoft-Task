import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Navbar } from './components/Navbar';

export class HomePage extends BasePage {
  readonly navbar: Navbar;
  readonly globalFeedTab: Locator;

  constructor(page: Page) {
    super(page);
    this.navbar = new Navbar(page);
    this.globalFeedTab = page.getByRole('button', { name: 'Global Feed' });
  }

  async isFeedVisible(): Promise<boolean> {
    return await this.globalFeedTab.isVisible();
  }
}
