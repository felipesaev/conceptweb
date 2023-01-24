import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'

export default function SupportPage() {
  const [success, setSuccess] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <Layout>
      <Article>
        <ArticleContent title="Suporte">
          <p>Coloque sua solicitação aqui</p>
          {/* create a short contact form with name, email, and message */}
          <form className="space-y-4">
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                id="message"
                name="message"
              />
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
            >
              Enviar
            </button>

            {success && (
              <div className="mt-2 text-xs italic text-gray-500">
                🎉 Showw!! Logo entraremos em contato!
              </div>
            )}
          </form>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[2/2] lg:w-full"
            width="320"
            height="340"
            src="https://img.myloview.com.br/adesivos/vector-funny-comic-cartoon-drawing-of-sick-depressed-or-frustrated-or-stressed-man-or-businessman-lying-on-table-and-holding-help-sign-concept-of-stress-and-burnout-700-194524073.jpg"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
