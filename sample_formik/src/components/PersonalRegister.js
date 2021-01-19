import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'


function PersonalRegister() {
    const gender=[
        {key:'Female', value: 'Female'},
        {key:'Male', value: 'Male'}
    ] 

  const initialValues ={
      mname:'',
      pswrd:'',
      email:'',
      regno:'',
      fname:'',
      gender:'Female',
      dob:'',
      nationality:'',
      religion:'',
      address:'',
      mobileno:''
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    mname: Yup.string().required('Required'),
    pswrd: Yup.string().required('Required'),
    regno: Yup.number().required('Required'),
    fname: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    dob: Yup.date().required('Required'),
    nationality: Yup.string().required('Required'),
    religion: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    mobileno: Yup.number().required('Required')

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
                    <FormikControl
                            control='input'
                            type='number'
                            label='regno'
                            name='regno'
                    />         
                    <FormikControl
                            control='input'
                            type='text'
                            label='FatherName'
                            name='fname'
                    />
                    <FormikControl
                            control='radio'
                            label='gender'
                            name='gender'
                            options={gender}
                    />
                    <FormikControl
                            control='input'
                            type='date'
                            label='DateofBirth'
                            name='dob'
                    />
                    <FormikControl
                            control='input'
                            type='text'
                            label='nationality'
                            name='nationality'
                    />
                    <FormikControl
                            control='input'
                            type='text'
                            label='religion'
                            name='religion'
                    />
                     <FormikControl
                            control='textarea'
                            label='address'
                            name='address'
                    />
                    <FormikControl
                            control='input'
                            type='number'
                            label='mobileno'
                            name='mobileno'
                    />

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default PersonalRegister 