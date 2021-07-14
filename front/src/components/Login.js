import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Login = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addHours } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newHistory = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: +amount
        }

        if (text.length > 1 & amount !== 0) { 
            addHours(newHistory); 
        }
        
        setText('');
        setAmount(0);
    }

    return (
        <div>
            <h2> Sign in </h2>
            <p>or create an account</p>
            <form onSubmit={onSubmit}>
                <div className="login-form-control">
                    <input type="username" value={text} onChange={(e) => setText(e.target.value)} placeholder="Username" />
                </div>
                <div className="login-form-control">
                    <input type="password" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Password" />
                </div>
                <button className="btn">Sign in</button>
            </form>
        </div>
    )
}
