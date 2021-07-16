import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { addUser } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            username: username,
            password: password
        }

        if (username.length) { 
            addUser(newUser); 
        }
        
        setUsername('');
        setPassword(0);
    }

    return (
        <div>
            <h2> Sign in </h2>
            <p>or create an account</p>
            <form onSubmit={onSubmit}>
                <div className="login-form-control">
                    <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className="login-form-control">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button className="btn">Sign in</button>
            </form>
        </div>
    )
}
