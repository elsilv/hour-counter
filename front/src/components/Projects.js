import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const Projects = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const { addHours } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newHistory = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            amount: +amount
        }

        if (name.length > 1 & amount !== 0) { 
            addHours(newHistory); 
        }
        
        setName('');
        setAmount(0);
    }

    return (
        <div>
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
    )
}
