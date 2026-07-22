import React from 'react'


type FormFieldProps = {
  label: string
  children: React.ReactNode
}

export const FormField: React.FC<FormFieldProps> = ({ label, children }) => {
  return (
    <div className='form-field'>
      <label>{label}</label>
      {children}
    </div>
  )
}
