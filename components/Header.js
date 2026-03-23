import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Meu Projeto</div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="#features" className={styles.navLink}>
                Características
              </Link>
            </li>
            <li>
              <Link href="#cta" className={styles.navLink}>
                Contato
              </Link>
            </li>
            <li>
              <Link href="#footer" className={styles.navLink}>
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
