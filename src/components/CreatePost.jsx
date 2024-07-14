const CreatePost = () =>{
    // logic
    
    const userInputHandle = (e) =>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }


    // ui
    return(
        <form>
            <input type="text" onChange={userInputHandle} placeholder="Enter Note Details" /> 
            <input type="submit" value="Add Note " />
        </form>
    )

}

export default CreatePost