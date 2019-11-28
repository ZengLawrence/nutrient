export function delayRouteHandler(routeHandler, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(routeHandler())
      , delay);
    });
  };
  