import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { createUser, getUserByKey } from "./data";
import bcrypt from 'bcryptjs';
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        const user = await getUserByKey('username', credentials.username);
        if (!user) throw new Error("Wrong credentials!");


        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
            return {
                error: 'Password Invalid',
            };
        }

        console.log(user);

        return user;

    } catch (err) {
        return {
            error: 'Failed in login function'
        };
    }
}


export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {

            if (account.provider === 'github') {

                try {
                    const existUser = await getUserByKey('email', profile.email);
                    console.log(existUser);

                    if (!existUser) {
                        const userData = {
                            username: profile.login,
                            img: profile.avatar_url,
                            email: profile.email
                        };

                        const newUser = await createUser(userData);

                        if (!newUser) {
                            return false;
                        }
                    }
                } catch {
                    return false;
                }

            }

            return true;


        },
        ...authConfig.callbacks

    }
})
