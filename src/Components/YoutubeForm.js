import React from 'react';
import {useFormik, ErrorMessage} from 'formik';
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
    const validate=values=>{
        //need to return object of error if there
        let errors={};
        if(!values.name){
            errors.name="Name Required"
        }
        if(!values.email){
            errors.email="Email Required"
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email="Invalid format"
        }
        if(!values.channel){
            errors.channel="Channel Required"
        }

        return errors;
    }

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
        //validate:validate, // we can use any one yup/normal formic validation function
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
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                    onBlur={formik.handleBlur}/>
                {(formik.errors.name && formik.touched.name) && <p style={{color:'red',display:'block'}}>{formik.errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    onBlur={formik.handleBlur}/>
                {(formik.errors.email && formik.touched.email) && <p style={{color:'red',display:'block'}}>{formik.errors.email}</p>}
                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="channel" 
                    name="channel" 
                    onChange={formik.handleChange} 
                    value={formik.values.channel}
                    onBlur={formik.handleBlur}/>
                {(formik.errors.channel && formik.touched.channel) && <p style={{color:'red',display:'block'}}>{formik.errors.channel}</p>}
                <button type="submit">Create Channel</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
