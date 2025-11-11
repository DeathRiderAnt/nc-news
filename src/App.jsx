import './App.css'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import SingleArticle from '../components/SingleArticle'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/articles/:article_id' element={<SingleArticle />}/>
        </Routes>
      </section>
    </>
  )
}

export default App
