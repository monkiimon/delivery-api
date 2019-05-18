const allRoute = [
  'AB1',
  'AC4',
  'AD10',
  'BE3',
  'CD4',
  'CF2',
  'DE1',
  'EB3',
  'EA2',
  'FD1',
]

function getSRoute(str) {
  return str.slice(0, 1)
}

function getDRoute(str) {
  return str.slice(1, 2)
}

function getSDRoute(str) {
  return str.slice(0, 2)
}

function getRouteCost(str) {
  return +str.slice(2)
}

function pairDeliRoute(deliRoute) {
  let pairRoutes = []
  deliRoute.forEach((r, i) => {
    if (i === deliRoute.length - 1) {
      return
    }
    pairRoutes = [...pairRoutes, `${deliRoute[i]}${deliRoute[i + 1]}`]
  })
  return pairRoutes
}

function someRmArray(arr, i) {
  return [...arr.slice(0, i), ...arr.slice(i + 1)]
}

function limitRoutes(routes, maxRoutes) {
  if (!maxRoutes) {
    return routes
  }
  const results = routes.filter(r => r.length <= maxRoutes)
  return results
}

function calCheapest(routes) {
  const calPrice = routes.map(r => {
    let totalPrice = 0
    r.forEach(rr => (totalPrice += getRouteCost(rr)))
    return totalPrice
  })
  const cheapest = Math.min(...calPrice)
  let cheapestIndexes = []
  calPrice.forEach((a, i) => {
    if (a === cheapest) {
      cheapestIndexes.push(i)
    }
  })
  cheapestDataSet = cheapestIndexes.map(c => routes[c])
  const results = {
    price: cheapest,
    routes: cheapestDataSet,
  }
  return results
}

function findPossibleRoute(arr, start, end, prevRoute = [], possibleRoute) {
  if (start === end && !!prevRoute.length) {
    possibleRoute.push(prevRoute)
    return
  }

  let results = []
  arr.forEach((a, i) => {
    if (getSRoute(a) === start) {
      results.push(i)
    }
  })
  if (results.length > 0) {
    const tempPrevRoute = prevRoute
    results.forEach(ai => {
      prevRoute = [...tempPrevRoute, arr[ai]]
      const dRoute = getDRoute(arr[ai])
      const remainRoute = someRmArray(arr, ai)
      findPossibleRoute(remainRoute, dRoute, end, prevRoute, possibleRoute)
    })
  }
}

// calCost return minus when "No Such Route"
function calCost(dR = '') {
  const deliArr = dR.split('-')
  const deliRoute = pairDeliRoute(deliArr)
  let resultCost = 0
  for (let i = 0; i < deliRoute.length; i++) {
    const d = deliRoute[i]
    const matchIndex = allRoute.findIndex(a => getSDRoute(a) === d)
    if (matchIndex < 0) {
      i = deliRoute.length
      resultCost = -1
    } else {
      resultCost += getRouteCost(allRoute[matchIndex])
    }
  }
  return resultCost
}

// calPossible return minus when "No Such Route"
function calPossible(start, end, maxRoutes) {
  let results = {}
  let possibleRoute = []
  let startPossibleRoute = []

  findPossibleRoute(allRoute, start, end, startPossibleRoute, possibleRoute)
  resultsRoutes = maxRoutes
    ? limitRoutes(possibleRoute, +maxRoutes)
    : possibleRoute

  results.amount = resultsRoutes.length
  results.cheapest = calCheapest(resultsRoutes)
  results.routes = resultsRoutes
  return results
}

module.exports = {
  calCost,
  calPossible,
}
