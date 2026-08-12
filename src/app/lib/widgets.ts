export interface Widget {
  id: number;
  label: string;
}

export function getFallbackWidgets(): Widget[] {
  return [{ id: 1, label: 'Migration-bridge proof widget' }];
}
