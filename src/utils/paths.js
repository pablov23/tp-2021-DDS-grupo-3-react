export const pathMatches = (val, location) =>
  val.route?.path === location?.pathname || val.subRoutes?.some?.(route => route.path === location?.pathname);
