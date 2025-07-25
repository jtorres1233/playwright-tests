import { test, expect } from '@playwright/test';

test('Verificar el título de la página ateneaconocimientos.com', async ({ page }) => {
  await page.goto('https://ateneaconocimientos.com');
  const title = await page.title();
  console.log(`El título de la página es: ${title}`);
  await expect(title).toBeTruthy();
});