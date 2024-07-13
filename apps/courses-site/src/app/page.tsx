import { Button } from '@ui-kit/ui';

import { sendEmail } from '@/features/email/actions/sendEmail';
import { auth } from '@/services/auth';

export default async function HomePage() {
  const session = await auth();

  return session?.user ? (
    <form action={sendEmail}>
      <Button type="submit">Send Email</Button>
    </form>
  ) : null;
}
