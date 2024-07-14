import './App.css'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  const authorName = "Yusof "

  const hello = () =>{
    console.log('Welcome')
  }

  const hello2 = (name) =>{
    console.log('Hello ${name}')
  }

  const hello3 = (e) =>{
    console.log(e)
  }

  return (
    <>
      <button onClick={hello}> Click </button>
      <button onClick={hello3}> Click again </button>
      <button onClick={()=> hello2('Yusof')}> Click again </button>


      < CreatePost />
      < Posts author={authorName} />
    </>
  )
}

export default App