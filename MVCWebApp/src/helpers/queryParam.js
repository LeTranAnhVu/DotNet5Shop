import queryString from 'query-string'

export function stringifyQuery(query) {
  let queryStr = '?'
  queryStr += queryString.stringify(query, {arrayFormat: 'bracket'});
  return queryStr
}

export function updateUrl(queryStr) {
  window.history.replaceState(null, null, queryStr)
}

export function parseCurrentParam() {
  if (!window) {
    console.error('Window is undefined | null')
    return
  }

  return queryString.parse(window.location.search, {arrayFormat: 'bracket'})
}