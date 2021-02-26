import React from 'react'
import Input from './Input';

function FormikContrl(props) {
    const {control,...rest}=props;
    switch(control){
        case "input":
            return <Input {...rest}/>;
        case "textarea":
            return;
        case "select":
            return;
        case "radio":
            return;
        case "checkbox":
            return;
        case "date":
            return;
        default:
            return null;
    }
}

export default FormikContrl
