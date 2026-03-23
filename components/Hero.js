import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Bem-vindo ao Futuro</h1>
      <p className={styles.heroSubtitle}>
        Descubra uma solução inovadora para suas necessidades
      </p>
      <Link href="#features" className={styles.ctaButton}>
        Começar Agora
      </Link>
    </section>
  )
}
