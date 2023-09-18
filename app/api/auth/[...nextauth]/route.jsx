import NextAuth from "next-auth/next";
import prisma from '../../../libs/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role ?? 'user'
                }
                
            }
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {

                if(!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found')
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role ?? 'user'
                }
            },
        }),  
    ],

    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },

    callbacks: {
        jwt(params) {
            if (params.user?.role){
                params.token.role = params.user.role;
            }
          return params.token
        },
      },
    
    
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}