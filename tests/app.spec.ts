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

test("Navigate to Dashboard Users", async ({ page }) => {
  await page.goto("/dashboard/users");
  await page.getByRole("link", { name: "Leanne Graham ⍥" }).click();
  await expect(
    page.getByRole("heading", { name: "Leanne Graham" })
  ).toBeVisible();
});

test("Search for Ervin Howell", async ({ page }) => {
  await page.goto("/dashboard/users");

  await page.getByPlaceholder("Search Names...").click();
  await page.getByPlaceholder("Search Names...").fill("erv");
  await page.getByRole("link", { name: "Ervin Howell ⍥" }).click();
  await expect(
    page.getByRole("heading", { name: "Ervin Howell" })
  ).toBeVisible();
});

test("Viewing qui est", async ({ page }) => {
  await page.goto("/dashboard/users");
  await page.getByRole("link", { name: "Invoices" }).click();
  await page.getByRole("link", { name: "#2 - qui est es ⍥" }).click();
  await expect(page.getByPlaceholder("Invoice Title")).toHaveValue(
    "qui est esse"
  );
});

test("Saving qui est", async ({ page }) => {
  await page.goto("/dashboard/users");
  await page.getByRole("link", { name: "Invoices" }).click();
  await page.getByRole("link", { name: "#2 - qui est es ⍥" }).click();

  await expect(page.getByPlaceholder("Invoice Title")).toHaveValue(
    "qui est esse"
  );
  await page.getByPlaceholder("Invoice Title").click();
  await page.getByPlaceholder("Invoice Title").press("ControlOrMeta+a");
  await page.getByPlaceholder("Invoice Title").fill("Expensive");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Saved!")).toBeVisible();
  await expect(page.getByPlaceholder("Invoice Title")).toHaveValue("Expensive");
});
