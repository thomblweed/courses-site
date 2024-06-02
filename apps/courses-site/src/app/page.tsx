import { sendEmail } from '@/features/email/actions/sendEmail';
import { auth, signIn, signOut } from '@/services/auth';

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
                <button type="submit">Sign Out</button>
              </form>
              <form action={sendEmail}>
                <button type="submit">Send Email</button>
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
              <button type="submit">Sign In</button>
            </form>
          </div>
        )
      }
    </div>
  );
}
