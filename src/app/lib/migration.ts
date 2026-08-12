export interface RouteStatus {
  path: string;
  migrated: boolean;
}

export interface MigrationStatus {
  migratedCount: number;
  totalRoutes: number;
  percentMigrated: number;
}

export function formatMigrationStatus(status: MigrationStatus): string {
  return `${status.migratedCount}/${status.totalRoutes} routes migrated (${status.percentMigrated}%)`;
}

export function routesRemaining(routes: RouteStatus[]): RouteStatus[] {
  return routes.filter((r) => !r.migrated);
}
