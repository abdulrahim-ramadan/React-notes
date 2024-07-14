
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
        <div className="container mt-4">
            <form onSubmit={notesFormSubmit}>
                <div className="row g-3 shadow">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="noteInput"
                            value={usertext}
                            onChange={userInputHandle}
                            placeholder="Enter Note Details"
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Add Note</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default CreatePost
