type Options = {
  /** The symbol used to separate parts of a slugged string. Defaults to a hyphen (`-`). */
  delimiter?: string;
  /** If `true`, at least one delimiter must be present in the string for it to be considered a valid slug. Defaults to `false`. */
  isDelimiterRequired?: boolean;
};

/** Returns `true` if the provided string is in a slug form and `false` otherwise. */
const isSlugged = (str: string, options?: Options) => {
  const { delimiter = '-', isDelimiterRequired = false } = options ?? {};
  if (isDelimiterRequired && str.indexOf(delimiter) === -1) return false;
  const regex = new RegExp(`^[a-zA-Z0-9](?:${delimiter}?[a-zA-Z0-9])*$`);
  return regex.test(str);
};

export default isSlugged;
