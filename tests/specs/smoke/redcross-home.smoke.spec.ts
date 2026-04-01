import { expect, test } from '../../fixtures/test';
import { redCrossHomeSmokeData } from '../../data/redcross/home.data';

test.describe(redCrossHomeSmokeData.suiteName, () => {
  test(redCrossHomeSmokeData.testName, async ({ redCrossHomePage }) => {
    const response = await redCrossHomePage.goto();

    test.skip(
      await redCrossHomePage.isBlockedBySiteProtection(response),
      redCrossHomeSmokeData.accessDeniedSkipMessage,
    );

    await expect(redCrossHomePage.page).toHaveTitle(
      redCrossHomeSmokeData.expectedTitle,
    );
    await expect(redCrossHomePage.homeLink).toBeVisible();
  });
});
