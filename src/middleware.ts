import NextAuth from "next-auth";
import authConfig from "./lib/auth-config";
import { NextRequest } from "next/server";

// Use only one of the two middleware options below

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
});
    