

import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';

const YoutubeForm=()=> {
    const initialValues={
        name:'',
        email:'',
        channel:''
    };
    const onSubmit=values=>{
        console.log("Values ",values);
    };

    const validationSchema = yup.object({
        name:yup
                .string()
                .required("name required!!!!"),
        email:yup
                .string()
                .email('invalid Email format')
                .required("Email required"),
        channel:yup
                .string()
                .required("Channel Required")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field 
                        type="text" 
                        id="name" 
                        name="name" />
                    <ErrorMessage name='name' />
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email" 
                        id="email" 
                        name="email" />
                    <ErrorMessage name='email' />
                    <label htmlFor="channel">Channel</label>
                    <Field 
                        type="text" 
                        id="channel" 
                        name="channel" />
                    <ErrorMessage name='channel' />
                    <button type="submit">Create Channel</button>
                </Form>
            </Formik>
        </div>
    )
}

export default YoutubeForm;

