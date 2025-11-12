import { useState, useEffect } from 'react'
import '../src/Article.css'
import { getArticleById, getCommentsByArticle, updateArticleVotes, postComment } from '../fetch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CommentCard from './CommentCard'

export default function SingleArticle(){
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [voteCount, setVoteCount] = useState(0)
    const [voteState, setVoteState] = useState("not-voted")
    const [showForm, setShowForm] = useState(false)
    const user = "NooYooser"
    const [commentData, setCommentData] = useState({author:{user}, body:""})
    

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
        .then(({article}) => {
            setArticle(article)
            setVoteCount(article.votes)
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

    function handleVote(voteDir){
        const increment = voteDir === "up" ? 1 : -1;
        if (voteDir === "up")
            setVoteState(voteState === "not-voted" ? "up-voted" : "not-voted")
        else
            setVoteState(voteState === "not-voted" ? "down-voted" : "not-voted")  

        setVoteCount((currCount) => currCount + increment)

        updateArticleVotes(article.article_id,increment)
    }

    function handleFormChange(e){
        const {name, value} = e.target;
        setCommentData((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted: ", commentData)
        postComment(article.article_id,commentData)
        setShowForm(false)
        setCommentData({author:{user}, body:""})
    }


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
                    <pre><button 
                    disabled={voteState === "down-voted"}
                    onClick={() => handleVote("down")}>DownVote!</button>     Votes: {voteCount}      <button 
                    disabled={voteState === "up-voted"}
                    onClick={() => handleVote("up")}>UpVote!</button>    Comments: {article.comment_count}</pre>
                </div>
                <div><button onClick={() => setShowForm(true)}>Add a Comment!</button></div>
            </section>

            {showForm && (
                <div className='overlay'>
                    <div className='popup'>
                        <h3>Please leave a Comment, {user}</h3>
                        <form action="">
                            <textarea 
                            name="body" 
                            value={commentData.body}
                            onChange={handleFormChange}
                            required
                            ></textarea>
                            <div>
                                <button onClick={() => setShowForm(false)}>Cancel</button>   <button type='submit'>Submit Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

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