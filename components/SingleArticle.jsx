import { useState, useEffect } from 'react'
import '../src/Article.css'
import { getArticleById, getCommentsByArticle } from '../fetch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CommentCard from './CommentCard'

export default function SingleArticle(){
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
        
        getCommentsByArticle(article_id)
        .then(({comments}) => {
            setComments(comments)
        })
        
    }, []);

    
    
    if (isLoading) {
        const loadMessage = <p>Loading Article...</p>
        return loadMessage
    }
    
    const articleCreatedAt = article.created_at;
    const articleDate = articleCreatedAt.slice(0,10)

    return(
        <>
            <section>
                <nav>
                    <Link to={'/'}>Back to Articles</Link>
                </nav>
                <div>
                    <img className="singleImg" src={article.article_img_url} alt={article.title} />
                </div>
                <div>
                    <h2>{article.title}</h2>
                </div>
                <div>
                    <pre>Topic: {article.topic}     Written by: {article.author}    Article Date: {articleDate}</pre>
                </div>
                <div>
                    <p>{article.body}</p>
                </div>
                <div>
                    <pre>Votes: {article.votes}     Comments: {article.comment_count}</pre>
                </div>
            </section>
            <section>
                <ol id='comment-list'>
                    {comments.map((comment) => {
                                return <CommentCard key={comment.id} comment={comment} />
                              })}
                </ol>
            </section>
        </>
    )
        
}