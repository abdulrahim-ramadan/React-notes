import { useState } from "react"

const CreatePost = () =>{
    // logic
    

    const [usertext,setUserText] = useState('')
    
    const userInputHandle = (e) =>{

        console.log(e.target.value)
        setUserText(e.target.value)
    }


    // ui
    return(
        <div> 
            <h2> {usertext} </h2>
            <form>
                <input type="text" onChange={userInputHandle} placeholder="Enter Note Details" /> 
                <input type="submit" value="Add Note " /> 
            </form>
        </div>
    )

}

export default CreatePost