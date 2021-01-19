import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'


function AcademicRegister() {
  const quota =[
      {key:'Management Quota', value: 'Management Quota'},
      {key:'Government Quota', value: 'Government Quota'}
  ]
  const lateralentry =[
    {key:'Yes', value: 'Yes'},
    {key:'No', value: 'No'}
]
const DayScholar =[
    {key:'Yes', value: 'Yes'},
    {key:'No', value: 'No'}
] 

const BloodGroup =[
    {key:'Select your bloodgroup', value:''},
    {key:'B+', value: 'B+'},
    {key:'B-', value: 'B-'},
    {key:'AB+', value: 'AB+'},
    {key:'AB-', value: 'AB-'},
    {key:'A+', value: 'A+'},
    {key:'A-', value: 'A-'},
    {key:'O+', value: 'O+'},
    {key:'O-', value: 'O-'}
] 
const qualifyexam =[
    {key:'Select your Exam type', value:''},
    {key:'STATEBOARD-HSC(ACADEMIC)', value: 'STATEBOARD-HSC(ACADEMIC)'},
    {key:'VOCATIONAL', value: 'VOCATIONAL'},
    {key:'CBSE-HSC(ACADEMIC)', value: 'CBSE-HSC(ACADEMIC)'},
    {key:'ICSE-HSC(ACADEMIC)', value: 'ICSE-HSC(ACADEMIC)'}
] 
//MENTOR DD WILL BE GENERATED FROM DEPARTMENT GIVEN BY STUDENT
//in personalregister nationality custom option
//here medium using custom select

const initialValues ={
    quota:'',
    lateralentry:'',
    DayScholar:'',
    BloodGroup:'',
    qualifyexam:'',
    schname:'',
    mentor:''
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
                            control='radio'
                            label='Quota'
                            name='quota'
                            options={quota}
                    />
                     <FormikControl
                            control='radio'
                            label='Lateral Entry'
                            name='lateral entry'
                            options={lateralentry}
                    />
                     <FormikControl
                            control='input'
                            type='text'
                            label='School Name'
                            name='schname'
                    />
                    <FormikControl
                           control='select'
                           label='qualify exam'
                           name='qualifyexam'
                           options={qualifyexam}
                    />
                    <FormikControl
                           control='radio'
                           label='Day Scholar'
                           name='Day Scholar'
                           options={DayScholar}
                    
                    />
                    <FormikControl
                           control='radio'
                           label='Blood Group'
                           name='BloodGroup'
                           options={BloodGroup}
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default AcademicRegister 