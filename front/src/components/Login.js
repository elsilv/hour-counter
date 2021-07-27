import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/main")
        }
    }, [history])

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        try {
            const { data } = await axios.post("/api/auth/login", { email, password }, config)

            localStorage.setItem("authToken", data.token)

            history.push("/main")
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError("")
            }, 5000)
        }
        
    }

    return(
    <div>
            <h2> Login </h2>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            {error && <span className="error-message"> { error } </span>}
            <form onSubmit={loginHandler}>
                <div className="login-form-control">
                    <input type="email" required id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="login-form-control">
                    <input type="password" required id="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login;