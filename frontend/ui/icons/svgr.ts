import prettierConfig   from '@atlantis-lab/prettier-config'
import svgr             from '@svgr/core'
import camelcase        from 'camelcase'
import fs               from 'fs-extra-promise'
import glob             from 'glob-promise'
import path             from 'path'
import prettier         from 'prettier'

import { replacements } from './replacements'

const TARGET_DIR = path.join(__dirname, 'src')

const svgrTemplate = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  return typeScriptTpl.ast`
 import React from 'react'

    export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx}
  `
}

const read = (files) =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      }).replace('50+', 'FiftyPlus')}Icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = (icons) =>
  Promise.all(
    icons.map(async (icon) => ({
      name: icon.name,
      code: await svgr(
        icon.source.replace(/mask0/g, icon.name),
        {
          icon: true,
          template: svgrTemplate,
          replaceAttrValues: replacements[icon.name] || {},
        },
        { componentName: icon.name.replace('50+', 'FiftyPlus') }
      ),
    }))
  )

const save = async (sources) =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(TARGET_DIR, `${source.name}.tsx`),
        `/* eslint-disable */\n${prettier.format(source.code, {
          parser: 'babel',
          ...prettierConfig,
        })}`
      )
    )
  )

const createIndex = (sources) =>
  fs.writeFileAsync(
    path.join(TARGET_DIR, 'index.ts'),
    sources.map((source) => `export * from './${source.name}'`).join('\n')
  )

const build = async () => {
  const files = await glob('./icons/*.svg')
  const icons = await read(files)

  const sources = await compile(icons.filter((icon: any) => icon.source))

  await fs.ensureDir(TARGET_DIR)

  await save(sources)
  await createIndex(sources)
}

build()
