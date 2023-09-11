import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    globalTimeout: 60000, // Maximum time the whole test suite can run,
    timeout: 5 * 60 * 1000,        // Timeout for each test
    expect: {
      timeout: 10 * 1000,   // <---------
    },
    use: {
      actionTimeout: 7000,
    }
};

export default config;