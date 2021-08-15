import isSlugged from '.';

describe('isSlugged', () => {
  it('returns true for a slugged string', () => {
    expect(isSlugged('a-slugged-string')).toStrictEqual(true);
  });
  it('returns true for a non-delimited word if delimiters are not required', () => {
    expect(isSlugged('abc')).toStrictEqual(true);
  });
  it('returns false for a non-delimited word if at least one delimiter is required', () => {
    expect(isSlugged('abc', { isDelimiterRequired: true })).toStrictEqual(false);
  });
  it('returns false for an unslugged string', () => {
    expect(isSlugged('Full-time employees work full time. Real-time events happen in real time.')).toStrictEqual(false);
  });
  it('supports custom delimiters', () => {
    expect(isSlugged('a_slugged_string', { delimiter: '_' })).toStrictEqual(true);
    expect(isSlugged('a-slugged-string', { delimiter: '_' })).toStrictEqual(false);
  });
});
