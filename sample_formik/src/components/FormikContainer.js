import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'


function FormikContainer() {
  const radioOption=[
      {key:'Option1', value: 'ro1'},
      {key:'Option2', value: 'ro2'}
  ] 
  const radioOption1=[
    {key:'Option11', value: 'ro11'},
    {key:'Option21', value: 'ro21'}
] 


  const initialValues ={
      email:'',
      studname:'',
      pswrd:'',
      radioOption:'',
      radioOption1:''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
})
  
  const onSubmit = values => console.log("form data", values)

    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik =>( <Form>
                    <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                    />
                     <FormikControl
                            control='input'
                            type='text'
                            label='Name'
                            name='studname'
                    />
                     <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='pswrd'
                    />
                    <FormikControl
                           control='radio'
                           label='Radio sample'
                           name='radioOption'
                           options={radioOption}
                    
                    />
                    <FormikControl
                           control='radio'
                           label='Radio sample'
                           name='radioOption1'
                           options={radioOption1}
                    
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer 