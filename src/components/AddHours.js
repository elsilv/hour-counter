import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddHours = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addHours } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newHistory = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: +amount
        }

        addHours(newHistory);
    }

    return (
        <>
            <h4>Add hours you have used</h4>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">What did you do?</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">How much time did you spend?</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter hours..." />
                </div>
                <button className="btn">Add hours</button>
            </form>
        </>
    )
}
