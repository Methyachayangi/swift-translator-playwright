const { test, expect } = require('@playwright/test');

test('Pos_UI_01: Real-time output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');

  await input.type('mama', { delay: 120 });
  await expect(page.locator('body')).toContainText('මම');

  await input.type(' gedhara yanavaa', { delay: 120 });
  await expect(page.locator('body')).toContainText('මම ගෙදර යනවා');
});
