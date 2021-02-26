import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import FormikContrl from './FormikContrl';

const FormikContainer=() =>{
    const InitaialValue={
        email:''
    };
    const validationSchema=Yup.object({
        email:Yup.string().required("Required")
    });
    const onSubmit=values=>{
        console.log(values);
    }
    return (
        <Formik
        initialValues={InitaialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik=>{
                    return (<Form>
                        <FormikContrl control="input" type="email" name="email" label="Email"/>
                        <button type="submit">Submit</button>
                    </Form>)
                }
            }
        </Formik>
    )
}

export default FormikContainer;