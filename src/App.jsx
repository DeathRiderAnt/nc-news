import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SingleArticle from "./components/SingleArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = "grumpy19";

  return (
    <>
      <Header user={user} />
      <section>
        <Routes>
          <Route path="/" element={<MainPage user={user} />} />
          <Route path="/topics/:topic" element={<MainPage user={user} />} />
          <Route path="/articles/:article_id" element={<SingleArticle user={user} />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
