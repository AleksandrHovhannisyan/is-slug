type Options = {
  /** The symbol used to separate parts of a slugged string. Defaults to a hyphen (`-`). */
  separator?: string;
  /** If `true`, at least one separator must be present in the string for it to be considered a valid slug. Defaults to `false`. */
  requireSeparator?: boolean;
};

/** Returns `true` if the provided string is in a slug form and `false` otherwise. */
const isSlug = (string: string, options?: Options) => {
  const { separator = '-', requireSeparator = false } = options ?? {};
  const regex = new RegExp(`^[a-zA-Z0-9](?:${separator}${requireSeparator ? '' : '?'}[a-zA-Z0-9])*$`);
  return regex.test(string);
};

export default isSlug;
