/**
 * An array of routes that are accessible to public
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to the default login redirect.
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * The prefix for API authentication routes.
 * These routes are prefixed with /api/auth
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default login redirect route.
 * This is the route that users will be redirected to after authentication.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
