import { test, expect } from '@playwright/test';

// Helper to set up auth state & mock backend API routes
async function setupAuthenticatedSession(page) {
  // Create a JWT token valid for 24 hours
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      id: '650000000000000000000001',
      email: 'testowner@example.com',
      isOwner: true,
      exp: Math.floor(Date.now() / 1000) + 86400,
    })
  );
  const token = `${header}.${payload}.signature`;

  const loginUser = JSON.stringify({
    id: '650000000000000000000001',
    name: 'Test Owner',
    email: 'testowner@example.com',
    isOwner: true,
  });

  // Inject token before any page script executes
  await page.addInitScript(({ t, u }) => {
    window.localStorage.setItem('apiToken', t);
    window.localStorage.setItem('token', t);
    window.localStorage.setItem('LoginUser', u);
    window.localStorage.setItem('user', u);
  }, { t: token, u: loginUser });

  // Mock API endpoints so backend 401 doesn't redirect to /login
  await page.route('**/api/urls**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        urls: [
          {
            _id: '650000000000000000000002',
            originalUrl: 'https://example.com',
            shortCode: 'exmp12',
            clicks: 10,
            preClicks: 15,
            active: true,
            createdAt: new Date().toISOString(),
            clickLogs: [],
            labels: [],
            campaigns: [],
          },
        ],
      }),
    });
  });

  await page.route('**/api/auth/labels**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, labels: {} }),
    });
  });

  await page.route('**/api/campaigns**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, campaigns: [] }),
    });
  });
}

test.describe('Dashboard & Feature Pages E2E Tests', () => {

  test('Unauthenticated users are redirected to login', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/.*login/);
  });

  test('Dashboard page (/dashboard) renders successfully when authenticated', async ({ page }) => {
    await setupAuthenticatedSession(page);
    await page.goto('/dashboard');

    await expect(page).not.toHaveURL(/.*login/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Analytics Dashboard (/dashboard/analytics) renders successfully', async ({ page }) => {
    await setupAuthenticatedSession(page);
    await page.goto('/dashboard/analytics');

    await expect(page).not.toHaveURL(/.*login/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Campaigns page (/dashboard/campaigns) renders successfully', async ({ page }) => {
    await setupAuthenticatedSession(page);
    await page.goto('/dashboard/campaigns');

    await expect(page).not.toHaveURL(/.*login/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('PreClick page (/dashboard/preclick) renders for owner user', async ({ page }) => {
    await setupAuthenticatedSession(page);
    await page.goto('/dashboard/preclick');

    await expect(page).not.toHaveURL(/.*login/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Individual Analytics page (/analytics/exmp12) renders correctly', async ({ page }) => {
    await setupAuthenticatedSession(page);
    await page.goto('/analytics/exmp12');

    await expect(page.locator('body')).toBeVisible();
  });
});
