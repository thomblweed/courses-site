'use server';

import { signIn } from '@/services/auth';

export const signInUser = async () => {
  await signIn();
};
