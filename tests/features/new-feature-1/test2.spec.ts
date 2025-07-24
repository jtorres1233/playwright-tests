import { test, expect } from '@playwright/test';

test('Go to LinkedIn and take a screenshot', async ({ page }) => {
  await page.goto('https://www.linkedin.com');
  await page.screenshot({ path: 'LinkedIn.png' });
});