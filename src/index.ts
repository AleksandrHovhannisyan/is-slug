type Options = {
  /** The symbol used to separate parts of a slugged string. Defaults to a hyphen (`-`). */
  separator?: string;
  /** A regex character set or pattern to match non-separating characters in the string. Defaults to `[a-zA-Z0-9]`. */
  charset?: RegExp;
};

/** Returns `true` if the provided string is in a slug form and `false` otherwise. */
const isSlug = (string: string, options?: Options) => {
  const { separator = '-', charset = /[a-zA-Z0-9]/ } = options ?? {};
  const charsetRegex = new RegExp(charset).source;
  const regex = new RegExp(`^${charsetRegex}(?:${separator}?${charsetRegex})*$`);
  return regex.test(string);
};

export default isSlug;
