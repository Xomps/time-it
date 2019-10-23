export default async function timeIt (label: string, fn: () => any, log = true) {
  const start = Date.now()
  const returnVal = await fn()
  const ms = Date.now() - start
  const asString = `${(ms / 1000).toFixed(3)}s`

  if (log) {
    console.log(`${label}: ${asString}`)
  }

  return {
    returnVal,
    ms,
    asString
  }
}
