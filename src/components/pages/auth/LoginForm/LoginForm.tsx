import React from 'react';
import {Formik, Field, Form} from "formik";

type MyFormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const initialValues: MyFormValues = {email: '', password: ''}
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="email" type="email" />
                    <Field name="password" type="password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}