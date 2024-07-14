import { useState } from "react"

const CreatePost = ({notes,setNotes,usertext,setUserText}) =>{
    // logic
    

    const userInputHandle = (e) =>{
        setUserText(e.target.value)
    }

    const notesFormSubmit = (e) =>{
        e.preventDefault();
        setNotes([...notes,usertext])
        setUserText('')
    }

    // ui
    return (
        <div> 
            <form onSubmit={notesFormSubmit}>
                <input type="text" value={usertext} onChange={userInputHandle} placeholder="Enter Note Details" /> 
                <input type="submit" value="Add Note " /> 
            </form>
        </div>
    );

}

export default CreatePost