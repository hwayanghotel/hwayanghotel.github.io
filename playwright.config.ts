import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 40_000,
  expect: { timeout: 7_000 },
  fullyParallel: true,
  workers: 3,
  reporter: [['list'], ['json', { outputFile: 'artifacts/test-results.json' }]],
  use: {
    baseURL: 'http://127.0.0.1:4321',
    locale: 'ko-KR',
    timezoneId: 'Asia/Seoul',
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
      args: ['--disable-gpu'],
    },
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } },
    },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    // Foreground process lets Playwright own its lifetime, including inside agent terminals.
    command: 'npm run preview -- --host 127.0.0.1 --ignore-lock',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
  },
});
