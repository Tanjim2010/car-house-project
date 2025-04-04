import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LoginUser from "@/app/actions/auth/LoginUser";
import { collectionsNameObj, dbConnect } from "./dbConnect";

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                // Add logic here to look up the user from the credentials supplied
                const user = await LoginUser(credentials)
                console.log("return user: ", user)

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/signIn',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log({ user, account, profile, email, credentials })
            if(account) {
                const {providerAccountId, provider} = account;
                const {email: userEmail, image, name} = user;
                const userCollection = dbConnect(collectionsNameObj.userDB);
                const isExist = await userCollection.findOne({provider});
                if(!isExist) {
                    const payload = {providerAccountId, provider, email:userEmail, image, name};
                    await userCollection.insertOne(payload)
                }
            }
            return true
        }
    }
}