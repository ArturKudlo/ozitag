import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

export const PageProfile = () => {
    const history = useHistory();
    useEffect(() => {
        const loginData = localStorage.getItem('loginData')
        if (!loginData) {
            history.push("/login");
        }
    },[])

    return (
        <div>
            <h2>Page Profile</h2>
            <button onClick={() => console.log('log out')}>Log Out</button>
        </div>
    )
}