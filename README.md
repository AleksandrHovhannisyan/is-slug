# is-slug
> Check if a string is in slug form.

## Installation

npm:

```
npm install --save-dev is-slug
```

yarn:

```
yarn add -D is-slug
```

## Usage

```ts
import isSlug from 'is-slug';

isSlug('hello-world'); // true
isSlug('hello_world', { separator: '_' }); // true
isSlug('-hello-world'); // false
isSlug('hello-world-'); // false
isSlug('hello--world'); // false

isSlug('hello'); // true
isSlug('hello', { requireSeparator: true }); // false

isSlug('hello, world'); // false
isSlug('hello-world, how are you?'); // false

isSlug('1-2-3', { charset: /[a-z]/ }); // false
isSlug('A-B-C', { charset: /[a-z]/ }); // false
isSlug('abc-def-xyz', { charset: /[a-z]/ }); // true
```

## API

### isSlug(string, options?)

| option             | type      | description                                                                                           | default         |
|--------------------|-----------|-------------------------------------------------------------------------------------------------------|-----------------|
| `separator`        | `string`  | The symbol used to separate parts of a slugged string.                                                | `-`             |
| `requireSeparator` | `boolean` | If `true`, at least one separator must be present in the string for it to be considered a valid slug. | `false`         |
| `charset`          | `RegExp`  | A regex character set or pattern to match non-separating characters in the string.                    | `/[a-zA-Z0-9]/` |
