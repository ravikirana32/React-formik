

import React,{useState} from 'react';
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik';
import * as yup from 'yup';
import TextErrors from './TextErrors';

const YoutubeForm=()=> {
    const [formValues,setFormValues]=useState(null);
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
    const savedValues={
        name:'ravi kirana',
        email:'ravi@gmail.com',
        channel:'sunrays world',
        comments:'welcome to my world',
        address:'Ankanahalli',
        social:{
            facebook:'facebook/ravikirana',
            twitter:'twitter/ravikirana'
        },
        phoneNumbers:['99999999','99999999'],
        phNumbers:['7777777',"7777777777"]
    };
    const onSubmit=(values,onsubmitProps)=>{
        console.log("Values ",values);
        console.log("onsubmitProps ",onsubmitProps);
        setTimeout(()=>{
            onsubmitProps.setSubmitting(false);
        },3000)
    };

    const validateComments=value=>{
        let error;
        if(!value){
            error="Required comment";
        }
        return error;
    }

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
        // comments:yup
        //         .string()
        //         .required("Comments Required"),
        // address:yup
        //         .string()
        //         .required("Address Required")

    })

    return (
        <div>
            <Formik
                initialValues={formValues || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
                //validateOnBlur={false} //stops the validation check on Blur of any field
                //validateOnChange={false}  //stops the validation check on Change of any field
               // validateOnMount={true}  //starts the validation check on Field mount(when component loads)
            >
                {
                    formik=>{
                        console.log("Formik ",formik);
                        return(
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
                                        placeholder="Youtube comments" 
                                        validate={validateComments}
                                        />
                                        <ErrorMessage name='comments' component={TextErrors}/>
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
                                {/* <button type="button" onClick={()=>{formik.validateField('comments')}}>Validate Comments</button>
                                <button type="button" onClick={()=>{formik.validateForm()}}>Validate All</button>
                                <button type="button" onClick={()=>{formik.setFieldTouched('comments')}}> Comments touched</button>
                                <button type="button" onClick={()=>{formik.setTouched({
                                    name:true,
                                    email:true,
                                    channel:true,
                                    comments:true
                                })}}>Form Touched</button> */}
                                <button type="button" style={{display:'block'}} onClick={()=>{setFormValues(savedValues)}}>Load Saved data</button>
                                <button type="submit" style={{display:'block'}} disabled={!formik.isValid || formik.isSubmitting}>Create Channel</button>
                            </Form>
            
                        )
                    }
                }
                </Formik>
        </div>
    )
}

export default YoutubeForm;

