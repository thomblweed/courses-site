'use server';

import { signOut } from '@/services/auth';

export const signOutUser = async () => {
  await signOut();
};
