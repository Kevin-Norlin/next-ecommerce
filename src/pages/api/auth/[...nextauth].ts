import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/utils/connection";
import { UserModel } from "@/models/User";
import { compare } from "bcrypt";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string,
          password: string,
        };
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          console.log(`${apiUrl}api/validate-user`);
          const response = await fetch(`${apiUrl}api/validate-user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (!response.ok) {
            console.log("Wrong email or password")
            return null;
          }
          else {
            return data;
          };
        }
        catch (error) {
          console.error(error);
          return null;
        }


      }
    })
  ],
  
  pages: {
    signIn: "/login"
  }

}

export default NextAuth(authOptions)