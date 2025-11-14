import { Link } from "react-router-dom";

export default function ArticleCard({article}){
    const articleCreatedAt = article.created_at;
    const articleDate = articleCreatedAt.slice(0,10)

    return (
        <div className="article">
            <div className="article-img">
                <img src={article.article_img_url} alt={article.title} />
            </div>
            <div className="article-main">
                <li className="article-main-list">
                    <div>Title: {article.title}</div>
                    <div>Author: {article.author}</div>
                    <div>Topic: {article.topic}</div>
                </li>
            </div>
            <div className="article-side">
                <div className="article-stats">Votes: {article.votes} Comments: {article.comment_count}</div>
                <div className="article-date">Article Date: {articleDate}</div>
                <nav><Link to={`/articles/${article.article_id}`}>View Article</Link></nav>
            </div>
        </div>
    )
}