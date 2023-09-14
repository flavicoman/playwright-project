import { PlaywrightTestConfig } from '@playwright/test';
require('dotenv').config()

const config: PlaywrightTestConfig = {
  globalTimeout: 60000, // Maximum time the whole test suite can run,
  timeout: 5 * 60 * 1000,        // Timeout for each test
  expect: {
    timeout: 10 * 1000,
  },
  testDir: "src/test/api-test/users",
  use: {
    actionTimeout: 7000,
    baseURL: 'https://tq-golf-dev-api.azurewebsites.net',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.BEARER_KEY}`,
      'Organizationid': `${process.env.ORGANIZATION_ID}`,
    }
  }
};

export default config;