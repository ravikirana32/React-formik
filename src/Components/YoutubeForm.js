

import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';

const YoutubeForm=()=> {
    const initialValues={
        name:'',
        email:'',
        channel:'',
        comments:'',
        address:''
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
                .required("Channel Required"),
        comments:yup
                .string()
                .required("Comments Required"),
        address:yup
                .string()
                .required("Address Required")
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
                        name="name" 
                        placeholder="Name"/>
                    <ErrorMessage name='name' />
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Email" />
                    <ErrorMessage name='email' />
                    <label htmlFor="channel">Channel</label>
                    <Field 
                        type="text" 
                        id="channel" 
                        name="channel"
                        placeholder="Youtube Channel Name" />
                    <ErrorMessage name='channel' />
                    <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                        <Field 
                            as='textarea'//A
                            //component="textarea"//B  both A and  B are same, B is depricated
                            id="comments" 
                            name="comments"
                            placeholder="Youtube comments" />
                            <ErrorMessage name='comments' />
                    </div>
                    <div className="form-control">
                    <label htmlFor="address">Address</label>
                        <Field 
                            name="address" >
                                {
                                    (props)=>{
                                        const {field,meta,form}=props;
                                        console.log(props);
                                        return <><input id="address" type="text" {...field}/>{meta.touched && meta.error?<p>{meta.error}</p>:null}</>
                                    }
                                }
                        </Field>
                    </div>
                    <button type="submit">Create Channel</button>
                </Form>
            </Formik>
        </div>
    )
}

export default YoutubeForm;

