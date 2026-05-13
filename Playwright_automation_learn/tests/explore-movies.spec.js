//import { test, expect } from '@playwright/test';

const {test, expect} = require('@playwright/test');

test.describe('Playwright Movies App — exploration', () => {
  const APP_URL = 'https://debs-obrien.github.io/playwright-movies-app';

  test('TC1: loads homepage and opens first movie details', async ({ page }) => {
    // 1. Navigate to the site
    await page.goto(APP_URL);

    // 2. Basic smoke: page title should mention movies (case-insensitive)
    await expect(page).toHaveTitle(/movies/i);

    // 3. Find at least one movie card using several sensible fallbacks
    const movieCard = page.locator('article, .movie, .movie-card, [data-testid="movie"], li').first();
    await expect(movieCard).toBeVisible();

    // 4. Ensure the card has a visible title (any common heading selector)
    const title = movieCard.locator('h1, h2, h3, [data-testid="title"], [aria-label="movie-title"], :scope [role="heading"]');
    await expect(title.first()).toBeVisible();

    // 5. Open details: prefer a "details" button, otherwise click the card
    const detailsBtn = movieCard.getByRole('button', { name: /detail|more|view/i }).first();
    if (await detailsBtn.count() > 0) {
      await detailsBtn.click();
    } else {
      await movieCard.click();
    }

    // 6. Expect a details panel/dialog to appear and contain title + description
    //const dialog = page.getByRole('dialog').first();
    const heading = page.getByRole('heading', { name: 'The Synopsis', level: 3 })

    //const title = page.getByRole('heading', { name: 'Deadpool & Wolverine' })

    await expect(heading).toBeVisible();
    await expect(page.locator(`//h3[normalize-space()='The Synopsis']`)).toBeVisible();
  });
});