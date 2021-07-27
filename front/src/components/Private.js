import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Private = ( ) => {
    const [error, setError] = useState('')
    const [privateData, setPrivateData] = useState('')

    const history = useHistory();
    
    useEffect(() => {
       if (!localStorage.getItem("authToken")) {
            history.push("/login")
        } 

        const fetchPrivateData = async() => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

        try {
                const { data } = await axios.get("/api/private", config)
                setPrivateData(data.data)

        } catch (error) {
                localStorage.removeItem("authToken")
                setError("Please login, access denied")
            }
        }

        fetchPrivateData()
    }, [history])

    const logoutHandler = () => {
        localStorage.removeItem("authToken")
        history.push("/login")
    }

    return (
        error ? (<span className="error-message">{ error }</span>) :
        (<div className="container"> 
        <h1>Hello!</h1> 
        <h3> { privateData } </h3>
        <button onClick={logoutHandler}>Log out</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit eu odio eu vestibulum. Pellentesque auctor risus efficitur metus gravida egestas. 
            Aliquam lacinia feugiat dolor, a bibendum eros. Quisque maximus turpis a erat tempor tempor. </p>
        </div> )
    )
}

export default Private;