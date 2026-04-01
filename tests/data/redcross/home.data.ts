export const redCrossHomeSmokeData = {
  suiteName: 'Red Cross homepage',
  testName: 'loads successfully for a first smoke check',
  expectedTitle: /Red Cross/i,
  accessDeniedSkipMessage:
    'redcross.org returned Access Denied from this network. Use an allowlisted IP, proxy, or VPN before running live-site tests.',
} as const;
