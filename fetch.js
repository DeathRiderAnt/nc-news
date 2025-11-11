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