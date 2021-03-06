import React from 'react'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Textarea from './Textarea'
import Select from './Select'

const FormikControl = (props) => {
    const { control, ...rest } = props
      switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio': 
            return <RadioButtons {...rest} />          
        case 'checkbox':
        case 'date':
        case 'chakraInput':
        default:
          return null;
      }
    };

    export default FormikControl