import './App.css'
import { useState } from 'react'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  //let authorName = "Abdulrahim Ramadan"
  const [authorName,setauthorName] = useState('Python Developer')

  const hello = () =>{
    //authorName = 'Abdulrahim Ramadan'
    setauthorName('Abdulrahim Ramadan')

  }

  return (
    <>
      <h1> Hello {authorName}</h1>

      <button onClick={hello}> Click </button>



     {/* < CreatePost />
      < Posts author={authorName} />*/}
    </>
  )
}

export default App