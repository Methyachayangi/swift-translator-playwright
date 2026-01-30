const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';
const INPUT = 'textarea';

test.describe('Positive Functional Tests (Pos_Fun)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Pos_Fun_01: Simple sentence', async ({ page }) => {
    await page.fill(INPUT, 'mama gedhara yanavaa.');
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා.');
  });

  test('Pos_Fun_02: Compound sentence', async ({ page }) => {
    await page.fill(INPUT, 'mama gedhara yanavaa namuth vahinavaa.');
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා නමුත් වහිනවා.');
  });

  test('Pos_Fun_03: Complex sentence', async ({ page }) => {
    await page.fill(INPUT, 'oya enavaanam mama balan innavaa.');
    await expect(page.locator('body')).toContainText('ඔය එනවානම් මම බලන් ඉන්නවා.');
  });

  test('Pos_Fun_04: Question', async ({ page }) => {
    await page.fill(INPUT, 'oyaata kohomadha?');
    await expect(page.locator('body')).toContainText('ඔයාට කොහොමද?');
  });

  test('Pos_Fun_05: Imperative command', async ({ page }) => {
    await page.fill(INPUT, 'meeka vahaama karanna.');
    await expect(page.locator('body')).toContainText('මේක වහාම කරන්න.');
  });

  test('Pos_Fun_06: Positive form', async ({ page }) => {
    await page.fill(INPUT, 'api heta enavaa.');
    await expect(page.locator('body')).toContainText('අපි හෙට එනවා.');
  });

  test('Pos_Fun_07: Negative form', async ({ page }) => {
    await page.fill(INPUT, 'api heta ennee naehae.');
    await expect(page.locator('body')).toContainText('අපි හෙට එන්නේ නැහැ.');
  });

  test('Pos_Fun_08: Greeting', async ({ page }) => {
    await page.fill(INPUT, 'aayuboovan, suba udhaeesanak!');
    await expect(page.locator('body')).toContainText('ආයුබෝවන්');
  });

  test('Pos_Fun_09: Polite request', async ({ page }) => {
    await page.fill(INPUT, 'karuNaakaralaa mata udhav karanna.');
    await expect(page.locator('body')).toContainText('කරුණාකරලා');
  });

  test('Pos_Fun_10: Informal phrasing', async ({ page }) => {
    await page.fill(INPUT, 'machan ooka dhiyan.');
    await expect(page.locator('body')).toContainText('මචන්');
  });

  test('Pos_Fun_11: Repeated words', async ({ page }) => {
    await page.fill(INPUT, 'hari hari mama ennam.');
    await expect(page.locator('body')).toContainText('හරි හරි');
  });

  test('Pos_Fun_12: Joined words', async ({ page }) => {
    await page.fill(INPUT, 'matabath oonee.');
    await expect(page.locator('body')).toContainText('මටබත්');
  });

  test('Pos_Fun_13: Past tense', async ({ page }) => {
    await page.fill(INPUT, 'mama iiyee gedhara giyaa.');
    await expect(page.locator('body')).toContainText('ඊයේ');
  });

  test('Pos_Fun_14: Present tense', async ({ page }) => {
    await page.fill(INPUT, 'mama dhaen vaeda karanavaa.');
    await expect(page.locator('body')).toContainText('දැන්');
  });

  test('Pos_Fun_15: Future tense', async ({ page }) => {
    await page.fill(INPUT, 'mama heta enavaa.');
    await expect(page.locator('body')).toContainText('හෙට');
  });

  test('Pos_Fun_16: Plural pronouns', async ({ page }) => {
    await page.fill(INPUT, 'api yamu, eyaalaa enavaa.');
    await expect(page.locator('body')).toContainText('අපි');
  });

  test('Pos_Fun_17: Medium length input', async ({ page }) => {
    await page.fill(INPUT, 'mama gedhara gihin paadam karala raeta bath kaala nidaagannavaa.');
    await expect(page.locator('body')).toContainText('පාඩම්');
  });

  test('Pos_Fun_18: Long paragraph', async ({ page }) => {
    const text = 'mama gedhara yanavaa. '.repeat(25);
    await page.fill(INPUT, text);
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා');
  });

  test('Pos_Fun_19: English brand name', async ({ page }) => {
    await page.fill(INPUT, 'mama Zoom meeting ekata join wenawa.');
    await expect(page.locator('body')).toContainText('Zoom');
  });

  test('Pos_Fun_20: Technical term', async ({ page }) => {
    await page.fill(INPUT, 'mata WiFi password eka dhenna.');
    await expect(page.locator('body')).toContainText('WiFi');
  });

  test('Pos_Fun_21: Abbreviation', async ({ page }) => {
    await page.fill(INPUT, 'mage NIC eka naethi unaa.');
    await expect(page.locator('body')).toContainText('NIC');
  });

  test('Pos_Fun_22: Currency & numbers', async ({ page }) => {
    await page.fill(INPUT, 'Rs. 5000 k dhenna.');
    await expect(page.locator('body')).toContainText('5000');
  });

  test('Pos_Fun_23: Date format', async ({ page }) => {
    await page.fill(INPUT, '2025-12-25 dhohi enna.');
    await expect(page.locator('body')).toContainText('2025-12-25');
  });

  test('Pos_Fun_24: Line breaks', async ({ page }) => {
    await page.fill(INPUT, 'mama\ngedhara\nyanavaa');
    await expect(page.locator('body')).toContainText('මම');
  });

});
