import type { Locator, Page, Response } from '@playwright/test';
import { RED_CROSS_ROUTES } from '../../core/constants/routes';
import { BasePage } from '../../core/base/base.page';

export class RedCrossHomePage extends BasePage {
  readonly homeLink: Locator;
  readonly accessDeniedHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.homeLink = page.getByRole('link', {
      name: /American Red Cross Home/i,
    });
    this.accessDeniedHeading = page.getByRole('heading', {
      name: 'Access Denied',
    });
  }

  async goto(): Promise<Response | null> {
    return this.navigateTo(RED_CROSS_ROUTES.home);
  }

  async isBlockedBySiteProtection(response: Response | null) {
    return (
      response?.status() === 403 ||
      (await this.accessDeniedHeading.isVisible().catch(() => false))
    );
  }
}
