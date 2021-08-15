import isSlugged from '.';

describe('isSlugged', () => {
  it('returns true for a slugged string', () => {
    expect(isSlugged('a-slugged-string')).toStrictEqual(true);
  });
  it('returns true for a word with no separators if separators are not required', () => {
    expect(isSlugged('abc')).toStrictEqual(true);
  });
  it('returns false for a word with no separators if at least one separator is required', () => {
    expect(isSlugged('abc', { requireSeparator: true })).toStrictEqual(false);
  });
  it('returns false for an unslugged string', () => {
    expect(isSlugged('Full-time employees work full time. Real-time events happen in real time.')).toStrictEqual(false);
  });
  it('supports custom separators', () => {
    expect(isSlugged('a_slugged_string', { separator: '_' })).toStrictEqual(true);
    expect(isSlugged('a-slugged-string', { separator: '_' })).toStrictEqual(false);
  });
});
