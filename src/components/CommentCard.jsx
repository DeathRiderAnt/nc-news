import { useState } from "react";

export default function CommentCard({comment, user, onDelete}) {
    const commentCreatedAt = comment.created_at;
    const commentDate = commentCreatedAt.slice(0,10);
    const [isDeleting, setIsDeleting] = useState(false);

    function handleDelete(){
        setIsDeleting(true)
        onDelete(comment.comment_id)
    }

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
                    <div>
                    {user === comment.author && <button disabled={isDeleting}
                    onClick={handleDelete}>Delete Comment</button>}
                    </div>
                </div>
            </div>    
        </>
    )
}