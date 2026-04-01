import { test as base, expect } from '@playwright/test';
import { RedCrossHomePage } from '../../src/pages/redcross/home.page';

type AppFixtures = {
  redCrossHomePage: RedCrossHomePage;
};

export const test = base.extend<AppFixtures>({
  redCrossHomePage: async ({ page }, use) => {
    await use(new RedCrossHomePage(page));
  },
});

export { expect };
