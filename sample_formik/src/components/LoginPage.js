import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'


function LoginPage() {

  const initialValues ={
      mname:'',
      pswrd:'',
      email:'',

  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    mname: Yup.string().required('Required'),
    pswrd: Yup.string().required('Required')

})
  
  const onSubmit = values => console.log("form data", values)

    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik =>( <Form>
                     <FormikControl
                            control='input'
                            type='text'
                            label='Name'
                            name='mname'
                    />
                     <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='pswrd'
                    />           
                    <FormikControl
                            control='input'
                            type='email'
                            label='email'
                            name='email'
                    />         
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginPage 