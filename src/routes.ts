/**
 * An array of routes that are accessible to public
 * These.
 * 
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to the default login redirect.
 * 
 */

export const authRoutes = ["/login", "/register", "/error"];

/**
 * The prefix for API authentication routes.
 * These routes are prefixed with /api/auth
 *
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default login redirect route.
 * This is the route that users will be redirected to after authentication.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
