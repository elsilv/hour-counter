import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const Logout = () => {

    const history = useHistory();

    const logoutHandler = () => {
        localStorage.removeItem("authToken")
        history.push('/login')
    }

    return (
        <> 
        {localStorage.getItem('authToken') === null && <p>Please log in first, <Link to="/login">Login</Link></p>}
        {localStorage.getItem('authToken') !== null && 
            <div className="container"> 
            <h1>Time Tracking</h1> 
            <button className="btn" onClick={logoutHandler}>Log out</button>
            </div>  
        }
        </>
    )
}