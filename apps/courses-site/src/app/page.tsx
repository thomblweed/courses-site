import { signIn } from '@/services/auth';
import styles from './page.module.scss';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h1>Courses</h1>
      <div>
        <form
          action={async () => {
            'use server';
            await signIn();
          }}
        >
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
