import { useState, useEffect } from 'react'
//import './App.css'
import { getArticleById } from '../fetch'

function SingleArticle(){
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticleById()
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [article]);

    return(
        <>
            <header>
            <h1>NC News</h1>
            </header>
            <section>
                <div>
                    <img src={article.article_img_url} alt={article.title} />
                </div>
                <div>
                    <h2>{article.title}</h2>
                </div>
                <div>
                    <p>Topic: {article.topic}   Written by: {article.author}    Article Date: {article.created_at}</p>
                </div>
                <div>
                    <p>{article.body}</p>
                </div>
                <div>
                    <p>Votes: {article.votes}   Comments: {article.comment_count}</p>
                </div>
            </section>
            <section>

            </section>
        </>
    )
        
}