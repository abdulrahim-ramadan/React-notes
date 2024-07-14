import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const CreatePost = ({ notes, setNotes, usertext, setUserText }) => {
    const userInputHandle = (e) => {
        setUserText(e.target.value);
    };

    const notesFormSubmit = (e) => {
        e.preventDefault();
        setNotes([...notes, usertext]);
        setUserText("");
    };

    return (
        <div className="d-flex justify-content-center bg-light py-4">
            <form onSubmit={notesFormSubmit} className="p-4 bg-white rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="mb-3">
                    <input
                        type="text"
                        value={usertext}
                        onChange={userInputHandle}
                        className="form-control"
                        placeholder="Enter Note Details"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Note</button>
            </form>
        </div>
    );
};

const Posts = ({ notes }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {notes.map((note, index) => (
                    <div key={index} className="col-12 mb-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <p className="card-text">{note}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

function App() {
    const [notes, setNotes] = useState([]);
    const [usertext, setUserText] = useState("");

    return (
        <div className="App d-flex flex-column min-vh-100">
            <CreatePost notes={notes} setNotes={setNotes} usertext={usertext} setUserText={setUserText} />
            <Posts notes={notes} />
        </div>
    );
}

export default App;
