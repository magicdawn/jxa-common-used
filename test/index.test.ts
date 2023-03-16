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
