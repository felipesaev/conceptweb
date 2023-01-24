import { Article, ArticleContent } from '@/components/article'
import { Layout } from '@/components/layout'

export default function Build() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Em construção">
          <p>Tente novamente em alguns dias</p>
        </ArticleContent>
      </Article>
    </Layout>
  )
}
