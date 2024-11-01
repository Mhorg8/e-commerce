import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import client from "./app/lib/prisma";
import { User } from "./app/types";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          name: "email",
          type: "email",
          label: "Email",
          required: true,
          placeholder: "example@gmail.com",
        },
        password: {
          name: "password",
          type: "password",
          label: "Password",
          required: true,
          placeholder: "******",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!password || !email) {
          throw new Error("Please fill in all required fields.");
        }

        const user: User | null = await client.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          throw new Error("No user found with this email.");
        }

        const isCurrentPassword = await bcrypt.compare(password, user.password);

        if (!isCurrentPassword) {
          throw new Error("Incorrect password.");
        }

        // User authenticated successfully, ensure we return the required properties
        return {
          id: user.id,
          email: user.email,
          name: user.username,
          password: user.password,
          image: user.img,
          verify: user.verify,
          updatedAt: user.updatedAt,
          createdAt: user.createdAt,
          emailVerified: true,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          username: user.name,
          image: user.image,
          verify: true,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        // session.user = token.user;
      }
      return session;
    },
  },
});
