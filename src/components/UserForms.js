import React from 'react'
import ResumeForm from '../forms/ResumeForm'
import JobDescriptionForm from '../forms/JobDescriptionForm'

export default function UserForms() {
   

  return (
    <div style={{margin: '0px auto', width:'80%', paddingTop:'75px'}}>
        <ResumeForm />
        <JobDescriptionForm/>
    </div>
  )
}