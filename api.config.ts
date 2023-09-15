import { defineConfig } from '@playwright/test';
export default defineConfig({
 
  // testDir: "src/test/api-test/service-points",
  // testDir: "src/test/api-test/schedules",
  // testDir: "src/test/api-test/organizations",
  // testDir: "src/test/api-test/bookings",
    testDir: "src/test/api-test/users",
    use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://tq-golf-dev-api.azurewebsites.net',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github.v3+json',
    },
      headless: true,
     viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
  ],
});

