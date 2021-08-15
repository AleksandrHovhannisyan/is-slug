import isSlug from '.';

describe('isSlug', () => {
  it('returns true for a slugged string', () => {
    expect(isSlug('a-slugged-string')).toStrictEqual(true);
  });
  it('returns true for a word with no separators if separators are not required', () => {
    expect(isSlug('abc')).toStrictEqual(true);
  });
  it('returns false for a word with no separators if at least one separator is required', () => {
    expect(isSlug('abc', { requireSeparator: true })).toStrictEqual(false);
  });
  it('returns false for an unslugged string', () => {
    expect(isSlug('Full-time employees work full time. Real-time events happen in real time.')).toStrictEqual(false);
  });
  it('supports custom separators', () => {
    expect(isSlug('a_slugged_string', { separator: '_' })).toStrictEqual(true);
    expect(isSlug('a-slugged-string', { separator: '_' })).toStrictEqual(false);
  });
});
