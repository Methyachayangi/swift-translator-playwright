const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';
const INPUT = 'textarea';

test.describe('Negative Functional Tests (Neg_Fun)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Neg_Fun_01: Chat shorthand Thx', async ({ page }) => {
    await page.fill(INPUT, 'Thx machan');
    await expect(page.locator('body')).toContainText('Thx');
  });

  test('Neg_Fun_02: Chat shorthand gm', async ({ page }) => {
    await page.fill(INPUT, 'gm yaluwane');
    await expect(page.locator('body')).toContainText('gm');
  });

  test('Neg_Fun_03: Chat shorthand gr8', async ({ page }) => {
    await page.fill(INPUT, 'meka gr8 wadak');
    await expect(page.locator('body')).toContainText('gr8');
  });

  test('Neg_Fun_04: Random text', async ({ page }) => {
    await page.fill(INPUT, 'xxyyzz abcd');
    await expect(page.locator('body')).toContainText('xxyyzz');
  });

  test('Neg_Fun_05: Mixed case chaos', async ({ page }) => {
    await page.fill(INPUT, 'MaMa GeDhaRa YaNaVaA');
    await expect(page.locator('body')).toContainText('MaMa');
  });

  test('Neg_Fun_06: Symbols', async ({ page }) => {
    await page.fill(INPUT, 'gedh@ra y@n@v@');
    await expect(page.locator('body')).toContainText('gedh@ra');
  });

  test('Neg_Fun_07: URL input', async ({ page }) => {
    await page.fill(INPUT, 'www.google.com');
    await expect(page.locator('body')).toContainText('www.google.com');
  });

  test('Neg_Fun_08: Email input', async ({ page }) => {
    await page.fill(INPUT, 'user@domain.com');
    await expect(page.locator('body')).toContainText('user@domain.com');
  });

  test('Neg_Fun_09: Hashtag', async ({ page }) => {
    await page.fill(INPUT, '#SriLanka');
    await expect(page.locator('body')).toContainText('#SriLanka');
  });

  test('Neg_Fun_10: Code snippet', async ({ page }) => {
    await page.fill(INPUT, 'print("hello")');
    await expect(page.locator('body')).toContainText('print');
  });

});
