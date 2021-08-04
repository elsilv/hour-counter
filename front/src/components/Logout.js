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
        {localStorage.getItem('authToken') === null && 
        <div className="log-text"> Please log in first, <Link to="/login">Login</Link></div>}
        {localStorage.getItem('authToken') !== null && 
            <div className="log-text"> 
            <button className="btn-log" onClick={logoutHandler}>Log out</button>
            </div>  
        }
        </>
    )
}