

import React from 'react';
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik';
import * as yup from 'yup';
import TextErrors from './TextErrors';

const YoutubeForm=()=> {
    const initialValues={
        name:'',
        email:'',
        channel:'',
        comments:'',
        address:'',
        social:{
            facebook:'',
            twitter:''
        },
        phoneNumbers:['',''],
        phNumbers:['']
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
                    <ErrorMessage name='name' component={TextErrors}/>
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Email" />
                    <ErrorMessage name='email' >
                        {
                            (errorMessge)=>{
                                return <div className="error">{errorMessge}</div>
                            }
                        }
                    </ErrorMessage>
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
                        <FastField 
                            name="address" >
                                {
                                    (props)=>{
                                        console.log("Address render");
                                        const {field,meta,form}=props;
                                        return <><input id="address" type="text" {...field}/>{meta.touched && meta.error?<p>{meta.error}</p>:null}</>
                                    }
                                }
                        </FastField>
                    </div>
                    <div className="form-control">
                        <label htmlFor="facebook">Facebook</label>
                        <Field 
                            type="text" 
                            id="facebook" 
                            name="social.facebook" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="twitter">Twitter</label>
                        <Field 
                            type="text" 
                            id="twitter" 
                            name="social.twitter" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="pimaryPh">Primary Phone Number</label>
                        <Field 
                            type="text" 
                            id="pimaryPh" 
                            name="phoneNumbers[0]" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="secPh">Secondory Phone Number</label>
                        <Field 
                            type="text" 
                            id="secPh" 
                            name="phoneNumbers[1]" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="secPh">PH Number</label>
                        <FieldArray name="phNumbers">
                                {(data)=>{
                                    const {push,remove,form}=data;
                                    const {values} =form;
                                    const {phNumbers}=values;
                                    return <div>
                                        {
                                            phNumbers.map((data,index)=>(
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`}/><span><button onClick={()=>{push('')}}>+</button><button disabled={phNumbers.length==1} onClick={()=>{remove(index)}}>-</button></span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }}
                        </FieldArray>
                    </div>
                    <button type="submit">Create Channel</button>
                </Form>
            </Formik>
        </div>
    )
}

export default YoutubeForm;

