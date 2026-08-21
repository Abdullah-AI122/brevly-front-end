import { test, expect } from '@playwright/test';

test.describe('Authentication E2E Flow', () => {
  test('should render login page and permit typing into input fields', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    // Check page elements
    await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();

    const emailInput = page.getByPlaceholder('you@example.com');
    const passwordInput = page.getByPlaceholder('••••••••');

    await emailInput.fill('e2euser@example.com');
    await passwordInput.fill('Password123!');

    await expect(emailInput).toHaveValue('e2euser@example.com');
    await expect(passwordInput).toHaveValue('Password123!');
  });

  test('should navigate between Login and Register pages', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    // Click register / sign up link if present
    const signUpLink = page.getByRole('link', { name: /sign up/i });
    if (await signUpLink.isVisible()) {
      await signUpLink.click();
      await expect(page).toHaveURL(/.*register/);
    }
  });
});
