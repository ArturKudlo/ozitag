import React from 'react';
import {LoginForm} from "../index"
import {MyFormValues} from "../LoginForm/LoginForm"

const host = 'https://tager.dev.ozitag.com'
const url = host + '/api/auth/user'

// email: 'user@ozitag.com', password: 'user',

export const PageAuth = () => {
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
        } catch (error) {
            alert(error.message || 'Something went wrong')
        }
    }

    return (
        <div>
            <h2>Please Authorize</h2>
            <LoginForm authenticate={authenticate}/>
        </div>
    )
}