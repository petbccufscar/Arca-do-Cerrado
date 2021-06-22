import queryString from 'query-string'

export const getNavigationData = params => {
  if (!params) return {}
  const { location, match } = params
  return Object.assign(
    {},
    location.search ? queryString.parse(location.search) : null,
    location.state || null,
    match.params || null
  )
}

export const scrollTop = function () {
  window.scrollTo(0, 0)
}
