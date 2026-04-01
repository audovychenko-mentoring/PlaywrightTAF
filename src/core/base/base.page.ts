import type { Page, Response } from '@playwright/test';

export abstract class BasePage {
  protected constructor(public readonly page: Page) {}

  protected async navigateTo(path: string): Promise<Response | null> {
    return this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }
}
