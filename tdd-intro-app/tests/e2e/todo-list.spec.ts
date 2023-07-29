import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/To Do List/);
});

test('has items list', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByText('Items')).toBeVisible();
})
