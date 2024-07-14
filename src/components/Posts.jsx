
const Posts = ({notes}) =>{
    // logic


    // ui 
    return (
        <div>
            {notes.map((note, index) => (
                <p key={index}>{note}</p>
            ))}

        </div>
    )
}

export default Posts