import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';

export const Projects = () => {
    const { addProject } = useContext(GlobalContext);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    // eslint-disable-next-line
    const [user, setUser] = useState('');
  
    useEffect(() => {
        addProject();
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const newProject = {
            name: name,
            amount: +amount,
            user: "60f91c788b820c315c2d2fcf"
        }

        if (name.length > 4 && amount !== 0) { 
           addProject(newProject); 

           setName('');
           setAmount(0);
           setUser('60f91c788b820c315c2d2fcf');
        }
        
        
    }

    return (
        <>
            <section className="pages">
            <div className="text">
            <h4>Add a new project</h4>

            {localStorage.getItem('authToken') === null && <p>Please log in first, <Link to="/login">Login</Link></p>}
            {localStorage.getItem('authToken') !== null && 
            <>
            <p>You are logged in</p>

            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Project name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">How much time do you want to spend?</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter hours..." />
                </div>
                <button className="btn">Add new project</button>
            </form> 

            </>}

        </div>
        </section>
        </>
    )
}