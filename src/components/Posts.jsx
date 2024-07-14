const Posts = ({notes}) =>{
    // logic


    // ui 
    return (
        <div className="container mt-4">
            <div className="row">
                {notes.map((note, index) => (
                    <div key={index} className="col-12 mb-3" >
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{note}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts