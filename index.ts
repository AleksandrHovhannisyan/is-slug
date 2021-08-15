type Options = {
  /** The symbol used to separate parts of a slugged string. Defaults to a hyphen (`-`). */
  delimiter?: string;
};

const isSlugged = (str: string, options?: Options) => {
  const { delimiter = '-' } = options ?? {};
  const regex = new RegExp(`^[\u00BF-\u1FFF\u2C00-\uD7FF\w](?:${delimiter}?[\u00BF-\u1FFF\u2C00-\uD7FF\w])*$`);
  return regex.test(str);
};

export default isSlugged;
