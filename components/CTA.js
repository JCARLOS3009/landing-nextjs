import styles from '../styles/Home.module.css'

export default function CTA() {
  return (
    <section className={styles.ctaSection} id="cta">
      <h2 className={styles.ctaSectionTitle}>Pronto para começar?</h2>
      <p className={styles.ctaSectionText}>
        Junte-se a milhares de usuários satisfeitos hoje mesmo
      </p>
      <a
        href="mailto:contato@exemplo.com"
        className={`${styles.ctaButton} ${styles.ctaButtonLight}`}
      >
        Entrar em Contato
      </a>
    </section>
  )
}
