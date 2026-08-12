import { getFallbackWidgets } from './widgets';

describe('getFallbackWidgets', () => {
  it('returns a non-empty fallback array', () => {
    expect(getFallbackWidgets().length).toBe(1);
  });
});
