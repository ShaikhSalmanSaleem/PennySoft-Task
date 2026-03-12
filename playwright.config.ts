import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 60000,
  reporter: [['html', { open: 'never' }], ['list']],
    use: {
      baseURL: 'https://demo.realworld.show',
  
      trace: 'on',
      screenshot: 'on',
      actionTimeout: 30000,
      navigationTimeout: 30000,
    },
  
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
  
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
  
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
  
      {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
      },
      {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 12'] },
      },
    ],
  });
