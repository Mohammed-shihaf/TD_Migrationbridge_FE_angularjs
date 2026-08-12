import { formatMigrationStatus, routesRemaining } from './migration';

describe('formatMigrationStatus', () => {
  it('formats the migration status string', () => {
    expect(formatMigrationStatus({ migratedCount: 2, totalRoutes: 4, percentMigrated: 50 })).toBe(
      '2/4 routes migrated (50%)'
    );
  });
});

describe('routesRemaining', () => {
  it('filters to unmigrated routes', () => {
    const routes = [{ path: '/a', migrated: true }, { path: '/b', migrated: false }];
    expect(routesRemaining(routes)).toEqual([{ path: '/b', migrated: false }]);
  });
});
