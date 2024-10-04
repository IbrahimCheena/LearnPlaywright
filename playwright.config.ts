import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/record.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  reporter: [["dot"], ["json", {
    outputFile: "JsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;
