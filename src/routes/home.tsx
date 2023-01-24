import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Páginas Web para empresas"
        content="Temos a solução perfeita para seu negocio digital. É simples e sem dor de cabeça. Deixe seu melhor e-mail abaixo e nós entraremos em contato"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
