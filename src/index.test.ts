import isSlug from '.';

describe('isSlug', () => {
  it('returns true for valid slugs', () => {
    expect(isSlug('a-slugged-string')).toStrictEqual(true);
    expect(isSlug('another-slugged-string')).toStrictEqual(true);
  });
  it('returns true for a string with no separators', () => {
    expect(isSlug('abc')).toStrictEqual(true);
  });
  it('returns false if the string contains whitespace', () => {
    expect(isSlug('a-slugged -string')).toStrictEqual(false);
    expect(isSlug('a-slugged- string')).toStrictEqual(false);
    expect(isSlug(' a-slugged-string')).toStrictEqual(false);
    expect(isSlug('a-slugged-string ')).toStrictEqual(false);
  });
  it('returns false for string starting with a separator', () => {
    expect(isSlug('-not-a-slugged-word')).toStrictEqual(false);
  });
  it('returns false for string ending with a separator', () => {
    expect(isSlug('not-a-slugged-word-')).toStrictEqual(false);
  });
  it('returns false for string containing consecutive separators', () => {
    expect(isSlug('not-a--slug')).toStrictEqual(false);
  });
  it('returns false for string containing punctuation', () => {
    expect(isSlug(`this-isn't-a-slug`)).toStrictEqual(false);
  });
  it('supports custom separators', () => {
    expect(isSlug('a_slugged_string', { separator: '_' })).toStrictEqual(true);
    expect(isSlug('a-slugged-string', { separator: '_' })).toStrictEqual(false);
  });
  it('supports custom character sets as regex', () => {
    expect(isSlug('0-1-2', { charset: /[a-z]/ })).toStrictEqual(false);
    expect(isSlug('A-B-C', { charset: /[a-z]/ })).toStrictEqual(false);
    expect(isSlug('a-b-c', { charset: /[a-z]/ })).toStrictEqual(true);
    expect(isSlug('e-ee-eee', { charset: /[e]/ })).toStrictEqual(true);
    expect(isSlug('a-aa-eee', { charset: /[e]/ })).toStrictEqual(false);
    expect(isSlug('asdasd-asd-asdasdasd', { charset: /asd/ })).toStrictEqual(true);
    expect(isSlug('asd-as-asd', { charset: /asd/ })).toStrictEqual(false);
    expect(isSlug('e-ee-eee', { charset: new RegExp('[e]') })).toStrictEqual(true);
  });
});
