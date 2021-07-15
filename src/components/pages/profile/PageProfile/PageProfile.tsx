import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

const host = 'https://tager.dev.ozitag.com'
const url = host + '/api/tager/user/profile'

interface IUserData {
    name: string
    email: string
    id: number
}

export const PageProfile = () => {
    const [userData, setUserData] = useState<IUserData>()
    const history = useHistory();
    useEffect(() => {
        const loginDataJson = localStorage.getItem('loginData')
        if (!loginDataJson) {
            history.push("/login");
        } else {
            const fetchUserProfile = async () => {
                try {
                    const loginData = JSON.parse(loginDataJson)
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `${loginData.tokenType} ${loginData.accessToken}`
                        },

                    });
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.message);
                    }
                    console.log({data, response})
                    setUserData(data.data)
                } catch (error) {
                    logout()
                    alert(error.message || 'Something went wrong')
                }
            }
            fetchUserProfile()
        }
    },[])

    const logout = () => {
        localStorage.removeItem('loginData')
        history.push('/login')
    }

    return (
        <div>
            <h2>Page Profile</h2>
            <h4>Name: {userData?.name}</h4>
            <h4>Email: {userData?.email}</h4>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}