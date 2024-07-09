import { sendEmail } from '@/features/email/actions/sendEmail';
import { auth, signIn, signOut } from '@/services/auth';
import { Button } from '@ui-kit/ui';

export default async function HomePage() {
  const session = await auth();

  return (
    <div>
      <h1>Courses</h1>
      {
        // temp poc code just prove out auth and email features
        session?.user ? (
          <>
            <div>Hi {session.user.name}</div>
            <div>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <Button type="submit">Sign Out</Button>
              </form>
              <form action={sendEmail}>
                <Button type="submit">Send Email</Button>
              </form>
            </div>
          </>
        ) : (
          <div>
            <form
              action={async () => {
                'use server';
                await signIn();
              }}
            >
              <Button type="submit">Sign In</Button>
            </form>
          </div>
        )
      }
    </div>
  );
}
