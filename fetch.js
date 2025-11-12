export function getArticles() {
    return fetch('https://nc-news-l6nr.onrender.com/api/articles')
    .then((res) => {
        return res.json();
    })
}

export function getArticleById(id) {
    return fetch(`https://nc-news-l6nr.onrender.com/api/articles/${id}`)
    .then((res) => {
        return res.json();
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