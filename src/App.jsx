import './App.css'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  const author = "Abdulrahim Ramada"

  return (
    <>
      < CreatePost />
      < Posts author={author} />
    </>
  )
}

export default App