import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { AuthOptions } from "next-auth/core/types"
import prisma from "@/app/libs/prismadb"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import NextAuth from "next-auth"

export const authOptions: AuthOptions = {
 adapter: PrismaAdapter(prisma),
 providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider(
        {
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "jbloggs@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                if(!credentials?.email || !credentials?.password) {
                   throw new Error("Invalid credentials")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })  
                if(!user || !user?.hashedPassword) {
                    throw new Error("Invalid Creds")
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if(!isCorrectPassword) {
                    throw new Error ("invalid password")
                }
                return user
            }
        }
    )
 ],
 pages: {
    signIn: "/",

 },
 debug: process.env.NODE_ENV === "development",
 session: {
    strategy: "jwt"
 },
 jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};



export default NextAuth(authOptions)