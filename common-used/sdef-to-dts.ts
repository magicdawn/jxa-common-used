/**
 * https://github.com/JXA-userland/JXA/blob/master/packages/%40jxa/types/tools/sdef-to-dts.js
 */

import { transform } from '@jxa/sdef-to-dts'
import { execSync } from 'child_process'
import fse from 'fs-extra'
import path from 'path'

const fixturesDir = path.join(__dirname, 'sdef')
const outputDir = path.join(__dirname, '../types/generated/')

void (async () => {
  fse.removeSync(outputDir)
  for (const caseName of fse.readdirSync(fixturesDir)) {
    await transformOne(caseName)
  }
  console.log('All updated')
})()

const modify: Record<string, Record<string, string>> = {
  // 手动修改
  PathFinder: {
    'selection(): any': 'selection(): null | FsItem[]',
  },
}

async function transformOne(caseName: string) {
  const fileName = path.basename(caseName, '.sdef')
  const normalizedTestName = fileName.replace(/\s/g, '')
  const actualContent = fse.readFileSync(path.join(fixturesDir, caseName), 'utf-8')
  console.log('transform ' + normalizedTestName)
  const actual = await transform(normalizedTestName, actualContent)
  const dts = path.join(outputDir, normalizedTestName) + '.d.ts'
  fse.outputFileSync(dts, actual, 'utf-8')
  execSync(`pnpm prettier --write ${dts}`, { stdio: 'inherit' })

  if (modify[normalizedTestName]) {
    let content = fse.readFileSync(dts, 'utf8')
    for (const [search, replace] of Object.entries(modify[normalizedTestName])) {
      content = content.replace(search, () => replace)
    }
    fse.writeFileSync(dts, content)
  }
}
