import { useEffect, useState } from "react";
import { getArticles } from '../fetch'
import ArticleCard from './ArticleCard'
import { useNavigate, useParams } from "react-router-dom";

export default function MainPage({user}) {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const {topic} = useParams()

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic)
    .then(({articles})=> {
        setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => console.error("Fetch error:", err))
  }, [topic])

  console.log(isLoading)

  if (isLoading) {
    const loadMessage = <p>Loading Articles...</p>
    return loadMessage
  }

  function handleTopicChange(e){
    const selectedTopic = e.target.value;
    if (selectedTopic === "")
      navigate('/')
    else
      navigate(`/topics/${selectedTopic}`)
  }

  return (
    <>
    <select value={topic || ""} name="topic-filter" id="topic" onChange={handleTopicChange}>
      <option value="">All Topics</option>
      <option value="coding">Coding</option>
      <option value="cooking">Cooking</option>
      <option value="football">Football</option>
    </select>
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