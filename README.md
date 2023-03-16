# jxa-common-used

> d.ts for common used app

[![npm version](https://img.shields.io/npm/v/jxa-common-used.svg?style=flat-square)](https://www.npmjs.com/package/jxa-common-used)
[![npm downloads](https://img.shields.io/npm/dm/jxa-common-used.svg?style=flat-square)](https://www.npmjs.com/package/jxa-common-used)
[![npm license](https://img.shields.io/npm/l/jxa-common-used.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
$ pnpm add jxa-common-used
```

## Usage

```sh
pnpm add -D @jxa/types @jxa/global-type jxa-common-used
```

tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@jxa/global-type", "@jxa/types"]
  }
}
```

or use triple slash directive

```ts
/// <reference types='@jxa/global-type' />
/// <reference types='@jxa/types' />
```

in some-script.ts

```ts
#!txa

/// <reference types='@jxa/global-type' />
/// <reference types='@jxa/types' />

import { PathFinder } from '..'

{
  const app = Application<PathFinder>('Path Finder')
  console.log((app.selection() || []).map((x) => x.posixPath()))
}

{
  const app = Application('Finder')
  console.log((app.selection() || []).map((x) => x.url()))
}
```

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

the MIT License http://magicdawn.mit-license.org
