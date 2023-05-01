import Link from 'next/link'
import styles from './page.module.css'
import Store from './store'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className={styles.main}>
        <Store />
        <Link
          href="/about"
          className={styles.card}
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Instantly got to about.
          </p>
        </Link>
    </main>
  )
}
