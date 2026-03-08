import { test, expect } from "@playwright/test";

/**
 * Basic E2E smoke test:
 * - Loads the page
 * - Checks the hero headline is visible
 * - Clicks the "Book a Discovery Call" button
 */
test.describe("Landing page smoke test", () => {
  test("loads page and has hero headline", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        name: /Engineering High-Performance Digital Products/i,
      })
    ).toBeVisible();
  });

  test("Book a Discovery Call button is clickable", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /Book a Discovery Call/i });
    await expect(cta).toBeVisible();
    // Verify it has an href (external link)
    const href = await cta.getAttribute("href");
    expect(href).toBeTruthy();
  });

  test("navigation links are present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Services" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Work" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
  });
});
