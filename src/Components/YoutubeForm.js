import React from 'react';
import {useFormik, ErrorMessage} from 'formik';

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
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        validate:validate,
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={formik.handleChange} 
                    value={formik.values.name}/>
                {formik.errors.name && <p style={{color:'red',display:'block'}}>{formik.errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email}/>
                {formik.errors.email && <p style={{color:'red',display:'block'}}>{formik.errors.email}</p>}
                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="channel" 
                    name="channel" 
                    onChange={formik.handleChange} 
                    value={formik.values.channel}/>
                {formik.errors.channel && <p style={{color:'red',display:'block'}}>{formik.errors.channel}</p>}
                <button type="submit">Create Channel</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
