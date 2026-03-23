import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page - Bem-vindo</title>
        <meta name="description" content="Uma landing page moderna e responsiva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
