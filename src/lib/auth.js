import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { createUser, getUserByKey } from "./data";
export const { auth, handlers: {GET,POST}, signIn, signOut } = NextAuth({ 
    providers: [ GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }) ],
    callbacks: {
        async signIn({user,account,profile}){
            // console.log(user,account,profile);
            if(account.provider === 'github'){

                try{
                    
                    const existUser = await getUserByKey('email',profile.email);

                    if(!existUser){
                        const userData = {
                            username: profile.login,
                            img: profile.avatar_url,
                            email: profile.email
                        };
        
                        const newUser = await createUser(userData);
        
                        if(!newUser){
                            return false;
                        }
                    }
                }catch{
                    return false;
                }


            }


            return true;
        },
    }
})
