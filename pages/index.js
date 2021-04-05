import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Darktypeboi from '../components/Darktypeboi'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Honchkrow</title>
        <link rel="icon" href="/honchkrow.png" />
      </Head>

      <main className={styles.main}>
        <Darktypeboi />
      </main>

      <footer className={styles.footer}>
        <a
            href="https://michaeldipaolo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by michaeldipaolo{' '}
          </a>
      </footer>
    </div>
  )
}
