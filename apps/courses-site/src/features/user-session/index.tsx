import { Button } from '@ui-kit/ui';

import { auth } from '@/services/auth';

import { signInUser } from './actions/signInUser';
import { UserMenu } from './components/user/Menu';

export const UserSession = async () => {
  const session = await auth();
  const hasSession = !!session?.user;

  return (
    <div>
      {hasSession ? (
        <UserMenu username={session.user?.name ?? session.user?.email} />
      ) : (
        <form action={signInUser}>
          <Button type="submit">Sign in</Button>
        </form>
      )}
    </div>
  );
};
