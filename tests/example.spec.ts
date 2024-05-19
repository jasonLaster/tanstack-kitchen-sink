import { test, expect } from "@playwright/test";

test("Navigate to Dashboard", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("heading", { name: "Dashboard" });
});

test("Navigate to Expensive", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Expensive" }).click();
  await page.getByText('I am an "expensive" component');
});

test("Navigate to Layout A", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Layout A" }).click();
  await page.getByText("I'm A!");
});

test("Navigate to Layout B", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Layout B" }).click();
  await page.getByText("I'm B!");
});

test("Navigate to Profile", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Profile" }).click();
  await page.getByText("You must log in!");
});

test("Navigate to Route Group", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Route Group" }).click();
  await page.getByText("Welcome to the Route Group");
});
