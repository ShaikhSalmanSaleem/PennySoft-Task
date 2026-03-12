# Playwright E2E Framework - Conduit App (RealWorld) - PennySoft

This repository contains a professional End-to-End (E2E) testing framework built with Playwright and TypeScript for the Conduit (RealWorld) application.

## 🚀 Key Features

- **Page Object Model (POM)**: Modular and scalable architecture for high maintainability.
- **Fluent API Design**: Action-oriented page methods for readable test scripts.
- **Dynamic Test Data**: Automated data generation using `@faker-js/faker`.
- **Cross-Browser Testing**: Support for Chromium, Firefox, WebKit, and Mobile viewports.
- **CI/CD Integration**: Fully configured GitHub Actions pipeline.
- **Detailed Reporting**: HTML reports with screenshots, traces, and video recordings on failure.

## 📁 Project Structure

```text
├── .github/workflows/    # CI/CD pipeline configuration
├── data/                 # Static test data
├── pages/                # Page Object Models
│   ├── components/       # Reusable UI components (e.g., Navbar)
│   ├── BasePage.ts       # Common page utilities
│   └── ...               # Individual page objects
├── tests/                # Test specifications
├── utils/                # Helper functions and data generators
├── playwright.config.ts  # Playwright global configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Prerequisites

- **Node.js**: v18 or later
- **npm**: v8 or later

## ⚙️ Installation

1. Clone the repository (if applicable) or navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install browser binaries:
   ```bash
   npx playwright install --with-deps
   ```

## 🧪 Running Tests

- **Run all tests (headless)**:
  ```bash
  npx playwright test
  ```
- **Run tests in headed mode**:
  ```bash
  npx playwright test --headed
  ```
- **Run a specific test file**:
  ```bash
  npx playwright test tests/auth.spec.ts
  ```
- **View HTML report**:
  ```bash
  npx playwright show-report
  ```

## 📈 CI/CD Integration

The framework is integrated with GitHub Actions. On every push or pull request to the `main` branch, the workflow:
1. Installs dependencies.
2. Installs Playwright browsers.
3. Executes the test suite.
4. Uploads the HTML report as a build artifact for review.

## 🧠 Design Philosophy

This framework follows the **Page Object Model (POM)** pattern to separate the test logic from the page-specific structures. By using **locators** rather than raw selectors, the tests are resilient to UI changes. Furthermore, the use of a **Fluent API** style ensures that tests remain expressive and easy to understand for both technical and non-technical stakeholders.
