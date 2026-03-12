import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { RandomData } from '../utils/RandomData';

test.describe('Authentication Flow - Conduit App', () => {
  let homePage: HomePage;
  let registerPage: RegisterPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    await homePage.navigate();
  });

  test('should successfully register a new user', async ({ page }) => {
    const userData = RandomData.getUserData();
    await homePage.navbar.clickSignUp();
    await expect(page).toHaveURL(/.*register/);

    await registerPage.register(userData.username, userData.email, userData.password);
    
    await expect(page.getByRole('link', { name: userData.username })).toBeVisible({ timeout: 10000 });
  });

  test('should successfully sign out after registration', async ({ page }) => {
    const userData = RandomData.getUserData();
    await homePage.navbar.clickSignUp();
    await registerPage.register(userData.username, userData.email, userData.password);
    await expect(page.getByRole('link', { name: userData.username })).toBeVisible({ timeout: 10000 });
    
    await homePage.navbar.clickSettings();
    const settingsPage = page.locator('.settings-page');
    await expect(settingsPage).toBeVisible();
    
    const logoutBtn = page.getByRole('button', { name: 'Or click here to logout.' });
    await logoutBtn.scrollIntoViewIfNeeded();
    await logoutBtn.click({ force: true });

    await expect(homePage.navbar.signInLink).toBeVisible();
  });

  test('should successfully sign in with existing credentials', async ({ page }) => {
    const loginUser = RandomData.getUserData();
    await homePage.navbar.clickSignUp();
    await registerPage.register(loginUser.username, loginUser.email, loginUser.password);
    await expect(page.getByRole('link', { name: loginUser.username })).toBeVisible();
    
    await homePage.navbar.clickSettings();
    const logoutBtnInTest = page.getByRole('button', { name: 'Or click here to logout.' });
    await logoutBtnInTest.scrollIntoViewIfNeeded();
    await logoutBtnInTest.click({ force: true });
    await expect(homePage.navbar.signInLink).toBeVisible();

    await homePage.navbar.clickSignIn();
    await page.waitForTimeout(1000);
    await loginPage.login(loginUser.email, loginUser.password);

    await expect(page.getByRole('link', { name: loginUser.username })).toBeVisible();
  });

  test('should fail to sign in with wrong credentials', async ({ page }) => {
    await homePage.navbar.clickSignIn();
    await loginPage.login('non_existent_user_random@example.com', 'InvalidPass123!');

    await expect(loginPage.errorMessage.first()).toBeVisible();
    await expect(loginPage.errorMessage.first()).toContainText('credentials invalid');
  });
});
