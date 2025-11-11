export function getArticles() {
    return fetch('https://nc-news-l6nr.onrender.com/api/articles')
    .then((res) => {
        return res.json();
    })
}