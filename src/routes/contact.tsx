import { Article, ArticleContent } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contato">
          Professional: Felipe Costa <br />
          Telefone: 12 98288-5224
        </ArticleContent>
      </Article>
    </Layout>
  )
}
