type Options = {
  /** The symbol used to separate parts of a slugged string. Defaults to a hyphen (`-`). */
  separator?: string;
  /** If `true`, at least one separator must be present in the string for it to be considered a valid slug. Defaults to `false`. */
  requireSeparator?: boolean;
  /** A regex character set or pattern to match non-separating characters in the string. Defaults to `[a-zA-Z0-9]`. */
  charset?: RegExp;
};

/** Returns `true` if the provided string is in a slug form and `false` otherwise. */
const isSlug = (string: string, options?: Options) => {
  const { separator = '-', requireSeparator = false, charset = /[a-zA-Z0-9]/ } = options ?? {};
  const charsetRegex = new RegExp(charset).source;
  const regex = new RegExp(`^${charsetRegex}(?:${separator}${requireSeparator ? '' : '?'}${charsetRegex})*$`);
  return regex.test(string);
};

export default isSlug;
