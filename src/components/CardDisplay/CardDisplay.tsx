import React from 'react'

import {type UserInputs} from '@/App'
import { Button } from '../Button/Button'
type CardDisplayProps={
    link:UserInputs,
    onDelete:(id:string)=>void,
    onEdit:(link:UserInputs)=>void
}

export const CardDisplay:React.FC<CardDisplayProps> = ({link,onDelete,onEdit}) => {
 
  return (
    <tr className='card'>
      <td className='title'>{link.title}</td>
      <td className='title'>{link.description}</td>
      <td className='url'>
      <a href={link.url} target="_blank" className='url'>{link.url}</a>
      </td>
        <td className='tag'>{link.tag}</td>
        <td className='actions'>
          <div className='buttons-styling'>
          
          <Button text="Update" variant="filled" className="update-button" onClick={() => onEdit(link)} />
          <Button text="Delete" variant="outlined" className="delete-button" onClick={() => onDelete(link.id)} />
        
          </div>
          </td>
       </tr>
  )
}
