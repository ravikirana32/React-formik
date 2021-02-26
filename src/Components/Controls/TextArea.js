import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextErrors from '../TextErrors';

function TextArea(props) {
    const {label,name,...rest}=props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" name={name} id={name} {...rest}/>
            <ErrorMessage name={name} component={TextErrors}/>
        </div>
    )
}

export default TextArea
