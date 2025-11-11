export default function ArticleCard({article}){
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
                <div className="article-date">Article Date: {article.created_at}</div>
                <button type="submit">View Article</button>
            </div>
        </div>
    )
}