import React, {useEffect} from 'react';
import {LoginForm} from "../index"
import {MyFormValues} from "../LoginForm/LoginForm"
import { useHistory } from "react-router-dom";

const host = 'https://tager.dev.ozitag.com'
const url = host + '/api/auth/user'

export const PageAuth = () => {
    const history = useHistory();

    useEffect(() => {
        const loginData = localStorage.getItem('loginData')
        if (loginData) {
            history.push("/");
        }
    },[])

    const authenticate = async (values: MyFormValues) => {
        const body = JSON.stringify({...values, clientId: 1})
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            console.log({data, response})
            localStorage.setItem('loginData', JSON.stringify(data.data));
            history.push("/");
        } catch (error) {
            alert(error.message || 'Something went wrong')
        }
    }

    return (
        <div>
            <h2>Please, authorize!</h2>
            <LoginForm authenticate={authenticate}/>
        </div>
    )
}