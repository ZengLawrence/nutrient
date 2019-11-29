export function delayRouteHandler(routeHandler, options) {
    return new Promise(resolve => {
      setTimeout(() => resolve(routeHandler())
      , options.timing);
    });
  };
  