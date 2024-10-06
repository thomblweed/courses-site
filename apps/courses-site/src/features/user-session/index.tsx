import { Button } from '@ui-kit/ui';

import { useUserSessionProps } from './hooks/useUserSessionProps';

export const UserSession = async () => {
  const { buttonText, action, userName } = await useUserSessionProps();

  return (
    <div className="flex items-center gap-4">
      {userName ? <div>Hi {userName}</div> : null}
      <form action={action}>
        <Button type="submit">{buttonText}</Button>
      </form>
    </div>
  );
};
