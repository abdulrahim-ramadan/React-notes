import './App.css'
import { useState } from 'react'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  let Name = "Learn React basics"


  

  return (
    <>


      < CreatePost />
      < Posts name={Name} />
    </>
  )
}

export default App