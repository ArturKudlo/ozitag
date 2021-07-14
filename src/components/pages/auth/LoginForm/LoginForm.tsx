import React from 'react';
import {Formik, Field, Form} from "formik";

type MyFormValues = {
    email: string
    password: string
}

const validateEmail= (value: string): string | undefined =>  {
    let error;
    if (!value) {
        error = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validatePassword = (value: string): string | undefined => {
    let error;
    if (value.length < 6) {
        error = 'Minimum 6 symbols required';
    }
    return error;
}

export const LoginForm = () => {
    const initialValues: MyFormValues = {email: '', password: ''}
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    console.log({values})
                }}
            >
                {({ errors, touched, isValidating }) => (
                    <Form>
                        <Field name="email" type="email" validate={validateEmail}/>
                        {errors.email && touched.email && <div>{errors.email}</div>}
                        <Field name="password" type="password" validate={validatePassword}/>
                        {errors.password && touched.password && <div>{errors.password}</div>}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}