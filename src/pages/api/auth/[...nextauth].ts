import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/config/prisma";
import { Session } from "next-auth";
import { User, Session as PrismaSession } from "@prisma/client";


const options: NextAuthOptions = {
  providers: [
    Auth0Provider({
      wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
      clientId: process.env.AUTH0_CLIENT_ID || "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH0_CLIENT_SECRET,
  callbacks: {
    async session({ session, user }) {
      const newSession: (PrismaSession & { user: User }) | null =
        await prisma.session.findFirst({
          where: {
            userId: user.id,
          },
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });

      return {
        ...session,
        user: newSession?.user,
        token: newSession?.sessionToken,
      };
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export { options };
