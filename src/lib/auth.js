// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({ 
    providers: [ GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }) ] 
})

// // middleware.ts
// export { auth as default } from "auth"

// // app/api/auth/[...nextauth].ts
// import { handlers } from "auth"
// export const { GET, POST } = handlers
// export const runtime = "edge"