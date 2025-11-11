export function getArticles() {
    return fetch('https://nc-news-l6nr.onrender.com/api/articles')
    .then((res) => {
        return res.json();
    })
}

export function getArticleById() {
    return fetch('https://nc-news-l6nr.onrender.com/api/articles/:article_id')
    .then((res) => {
        return res.json();
    })
}