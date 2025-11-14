export function getArticles(topic, {sort_by = "created_at", order = "desc"} = {}) {
    const params = new URLSearchParams();

    if(topic) params.append("topic",topic)
    if(sort_by) params.append("sort_by",sort_by)
    if(order) params.append("order",order)

    const url = `https://nc-news-l6nr.onrender.com/api/articles?${params.toString()}`;
    
    return fetch(url)
    .then((res) => {
        return res.json();
    })
}

export function getArticleById(id) {
    return fetch(`https://nc-news-l6nr.onrender.com/api/articles/${id}`)
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error("Fetch error: ",err)
    })
}

export function getCommentsByArticle(id) {
    return fetch(`https://nc-news-l6nr.onrender.com/api/articles/${id}/comments`)
    .then((res) => {
        return res.json();
    })
}

export function updateArticleVotes(id,vote){
    return fetch(`https://nc-news-l6nr.onrender.com/api/articles/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({inc_votes: vote})
    })
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error("Fetch error: ",err)
    })
}

export function postComment(id,comment) {
    return fetch(`https://nc-news-l6nr.onrender.com/api/articles/${id}/comments`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
    })
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error("Fetch error: ",err)
    })
}

export function deleteComment(id){
    return fetch(`https://nc-news-l6nr.onrender.com/api/comments/${id}`, {
        method: "DELETE"
    })
    .then((res) => {
        if (!res.ok) throw new Error ("Failed to delete comment!")
    })
    .catch((err) => {
        console.error("Fetch error: ",err)
        throw err;
    })
}