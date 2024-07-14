
import { useState } from 'react'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  const [usertext,setUserText] = useState('')
  const [notes,setNotes] = useState([])


  


  return (
    <>
      <CreatePost notes={notes} setNotes={setNotes} usertext={usertext} setUserText={setUserText} />
      <Posts notes={notes} />
    </>
  )
}

export default App