import { useState, useEffect } from "react";
import axios from 'axios';

export const Private = ( {history} ) => {
    const [error, setError] = useState('')
    const [privateData, setPrivateData] = useState('')

    useEffect(() => {
       if (!localStorage.getItem("authToken")) {
            history.push("/login")
        } 

        const fetchPrivateData = async() => {
            const config = {
                header: {
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
        (<div> 
        <p>Signed in as</p>
        {privateData}
        <button onClick={logoutHandler}>Log out</button>
        </div> )
    )
}

export default Private;