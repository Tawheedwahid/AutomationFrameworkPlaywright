# Enterprise Playwright Automation Framework

> **Author:** Tawheed Wani  
> **Target Application:** [demoqa.com](https://demoqa.com)

---

## Overview

A professional, enterprise-grade test automation framework built with:

- **Playwright** — cross-browser end-to-end testing
- **TypeScript** — type-safe test code
- **Allure Reports** — rich, interactive HTML reports
- **Winston** — structured test execution logging
- **dotenv** — multi-environment configuration

---

## Project Structure

```
AutomationFrameworkPlaywright/
├── src/
│   ├── config/          # Environment configuration loader
│   ├── data/            # JSON test data fixtures
│   ├── fixtures/        # Playwright custom fixtures (page objects DI)
│   ├── pages/           # Page Object Model classes
│   └── utils/           # Logger, test-data manager, allure helper
├── tests/               # Test specs
├── .env                 # Default environment variables
├── .env.dev             # Dev environment overrides
├── .env.qa              # QA environment overrides
├── .env.staging         # Staging environment overrides
├── playwright.config.ts # Playwright configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

---

## Setup

```bash
npm install
npx playwright install
```

---

## Running Tests

| Command | Description |
|---|---|
| `npm test` | Run all tests (QA env, headless) |
| `npm run test:dev` | Run with dev environment |
| `npm run test:staging` | Run with staging environment |
| `npm run test:chrome` | Run on Chromium only |
| `npm run test:firefox` | Run on Firefox only |
| `npm run test:webkit` | Run on WebKit only |
| `npm run test:headed` | Run in headed (visible) mode |

### Run a specific test file
```bash
npx playwright test tests/home.spec.ts
```

### Run with a specific project (browser)
```bash
npx playwright test --project=firefox
```

---

## Allure Reports

```bash
# Generate and open report
npm run report

# Or step by step:
npm run allure:generate    # Generate from allure-results/
npm run allure:open        # Open generated report
npm run allure:serve       # Serve directly from allure-results/
```

> Requires [Allure CLI](https://docs.qameta.io/allure/#_installing_a_commandline) installed globally.

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `ENV` | `qa` | Target environment: `dev`, `qa`, `staging` |
| `BASE_URL` | `https://demoqa.com` | Application under test base URL |
| `HEADLESS` | `true` | Run headless (`true`/`false`) |
| `BROWSER` | `chromium` | Default browser |

---

## Test Coverage

| Module | Tests |
|---|---|
| Home Page | Title, card count, card navigation |
| Text Box | Valid form submission, invalid email, parameterized |
| Radio Button | Each option, disabled state |
| Check Box | Expand all, select items |
| Login Page | Form elements, error scenarios |

---

*Framework designed and maintained by **Tawheed Wani***
