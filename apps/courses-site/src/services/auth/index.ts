import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

const authOptions: NextAuthConfig = {
  providers: [GitHub],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
