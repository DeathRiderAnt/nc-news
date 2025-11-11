import { useEffect, useState } from "react";
import { getArticles } from '../fetch'
import ArticleCard from './ArticleCard'

export default function MainPage() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getArticles()
    .then(({articles})=> {
        setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => console.error("Fetch error:", err))
  }, [])

  console.log(isLoading)

  if (isLoading) {
    const loadMessage = <p>Loading Articles...</p>
    return loadMessage
  }

  return (
    <>
      <section>
        <ol id='article-list'>
          {articles.map((article) => {
            return <ArticleCard key={article.id} article={article} />
          })}
        </ol>
      </section>
    </>
  )
}