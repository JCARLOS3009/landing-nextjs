import styles from '../styles/Home.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Rápido',
    description:
      'Desempenho excepcional e carregamento instantâneo para sua melhor experiência.',
  },
  {
    icon: '🔒',
    title: 'Seguro',
    description:
      'Proteção de dados de ponta com as mais recentes criptografias de segurança.',
  },
  {
    icon: '📱',
    title: 'Responsivo',
    description: 'Funciona perfeitamente em todos os dispositivos e tamanhos de tela.',
  },
  {
    icon: '💡',
    title: 'Inteligente',
    description: 'Tecnologia avançada que se adapta às suas necessidades específicas.',
  },
  {
    icon: '🌍',
    title: 'Global',
    description: 'Disponível em todo o mundo com suporte em múltiplos idiomas.',
  },
  {
    icon: '👥',
    title: 'Suporte 24/7',
    description: 'Equipe dedicada pronta para ajudá-lo a qualquer hora do dia ou noite.',
  },
]

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <h2 className={styles.featuresTitle}>Por que escolher?</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureCardTitle}>{feature.title}</h3>
            <p className={styles.featureCardText}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
