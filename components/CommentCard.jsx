export default function CommentCard({comment}) {
    const commentCreatedAt = comment.created_at;
    const commentDate = commentCreatedAt.slice(0,10)

    return(
        <>
            <div className="comment">
                <div className="comment-side">
                    <div className="comment-author">Written By: {comment.author}</div>
                    <div className="comment-date">Comment Date: {commentDate}</div>
                    <div className="comment-votes">Votes: {comment.votes}</div>
                </div>           
                <div className="comment-body">
                    {comment.body}
                </div>
            </div>    
        </>
    )
}