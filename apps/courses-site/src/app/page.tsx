import { auth, signIn, signOut } from '@/services/auth';
import styles from './page.module.scss';

export default async function HomePage() {
  const session = await auth();

  return (
    <div className={styles.page}>
      <h1>Courses</h1>
      {
        // temp poc code
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
