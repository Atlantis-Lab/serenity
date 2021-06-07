/* eslint-disable */
let migrations = ['src/migrations/**{.ts,.js}']

declare const __webpack_require__: any

// @ts-ignore
if (typeof __webpack_require__ === 'function') {
  // @ts-ignore
  const migrationsRequire = require.context('./migrations/', false, /.ts$/)

  // @ts-ignore
  migrations = migrationsRequire.keys().map(migrationsRequire).map(Object.values).flat()
}

export default migrations
