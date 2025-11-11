import { useState, useEffect } from 'react'
import './App.css'
import { getArticles } from '../fetch'
import ArticleCard from '../components/ArticleCard'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
    .then(({articles})=> {
        setArticles(articles)
    })
    .catch((err) => console.error("Fetch error:", err))
  }, [])

  console.log(articles)

  return (
    <>
      <header>
        <h1>NC News</h1>
      </header>
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

export default App
