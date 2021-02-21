import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

const OldYoutubeForm=()=> {
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
                .required("name required"),
        email:yup
                .string()
                .email('invalid Email format')
                .required("Email required"),
        channel:yup
                .string()
                .required("Channel Required")
    })

    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        validationSchema:validationSchema
    });
    //console.log("is touched ",formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    {...formik.getFieldProps('name')}/>
                {(formik.errors.name && formik.touched.name) && <p style={{color:'red',display:'block'}}>{formik.errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    {...formik.getFieldProps('email')}/>
                {(formik.errors.email && formik.touched.email) && <p style={{color:'red',display:'block'}}>{formik.errors.email}</p>}
                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="channel" 
                    name="channel" 
                    {...formik.getFieldProps('channel')}/>
                {(formik.errors.channel && formik.touched.channel) && <p style={{color:'red',display:'block'}}>{formik.errors.channel}</p>}
                <button type="submit">Create Channel</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm;
