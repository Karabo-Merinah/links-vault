import React from 'react'


type FormFieldProps = {
  label: string
  children: React.ReactNode
}
//Combines the label,input and textarea used by every field in LinkForm
export const FormField: React.FC<FormFieldProps> = ({ label, children }) => {
  return (
    <div className='form-field'>
      <label>{label}</label>
      {children}
    </div>
  )
}
