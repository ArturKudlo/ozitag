import React from 'react';
import {Formik, Field, Form} from "formik";
import "./LoginForm.css";

export type MyFormValues = {
    email: string
    password: string
}

type PropsType = {
    authenticate: (values: MyFormValues) => void
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
    if (value.length < 4) {
        error = 'Minimum 4 symbols required';
    }
    return error;
}

export const LoginForm = ({authenticate}: PropsType) => {
    const initialValues: MyFormValues = {email: '', password: ''}

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    authenticate(values)
                }}
            >
                {({ errors, touched, isValidating }) => (
                    <Form className='form__content'>
                        <Field className='form__content--email btn' name="email" type="email" placeholder="email" validate={validateEmail}/>
                        {errors.email && touched.email && <div className='form__error'>{errors.email}</div>}
                        <Field className='form__content--password btn' name="password" type="password" placeholder="password" validate={validatePassword}/>
                        {errors.password && touched.password && <div className='form__error'>{errors.password}</div>}
                        <button className='form__content--submit btn' type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}