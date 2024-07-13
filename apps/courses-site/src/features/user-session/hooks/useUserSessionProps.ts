import { auth } from '@/services/auth';

import { signOutUser } from '../actions/signOutUser';
import { signInUser } from '../actions/signInUser';

export const useUserSessionProps = async () => {
  const session = await auth();
  const hasSession = !!session?.user;

  return {
    buttonText: hasSession ? 'Sign Out' : 'Sign In',
    action: hasSession ? signOutUser : signInUser,
    userName: hasSession ? session.user?.name : null,
  };
};
