import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('ibrahimyusufcheena@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Change your password' }).click();
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('654321');
  await page.getByPlaceholder('Password Confirm').click();
  await page.getByPlaceholder('Password Confirm').fill('654321');
  await page.getByRole('link', { name: ' Back' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('ibrahimE');
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('ibrahimEtsy');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});