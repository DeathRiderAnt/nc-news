import { useEffect, useState } from "react";
import { getArticles } from "../../fetch";
import ArticleCard from "./ArticleCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function MainPage({ user }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, { sort_by, order })
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message || "Something went wrong..."));
  }, [topic, sort_by, order]);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (isLoading) {
    const loadMessage = <p>Loading Articles...</p>;
    return loadMessage;
  }

  function handleTopicChange(e) {
    const selectedTopic = e.target.value;
    if (selectedTopic === "") navigate("/");
    else navigate(`/topics/${selectedTopic}`);
  }

  function handleSortBy(e) {
    setSearchParams({
      sort_by: e.target.value,
      order,
    });
  }

  function handleOrder(e) {
    setSearchParams({
      sort_by,
      order: e.target.value,
    });
  }

  return (
    <>
      <div className="filters">
        <select value={sort_by} name="sort_by" id="sort" onChange={handleSortBy}>
          <option value="created_at">Sort by Date</option>
          <option value="comment_count">Sort by Comment Count</option>
          <option value="votes">Sort by Votes</option>
        </select>
        <select value={order} name="order" id="order" onChange={handleOrder}>
          <option value="desc">Descending order</option>
          <option value="asc">Ascending order</option>
        </select>
        <select value={topic || ""} name="topic-filter" id="topic" onChange={handleTopicChange}>
          <option value="">All Topics</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </div>
      <section>
        <ol id="article-list">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ol>
      </section>
    </>
  );
}
