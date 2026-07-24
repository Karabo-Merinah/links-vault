import React from 'react'
import {Texts} from '@/components/Texts/Texts'
import {Button} from '@/components/Button/Button'

type DeletePopUp={
    message:string,
    onConfirm:()=> void,
    onCancel:()=>void
}

export const DeletePopUp:React.FC<DeletePopUp> = ({message,onConfirm,onCancel}) => {
  return (
    <div className='overlay-color' onClick={onCancel}>
        <div className='confirm-box' onClick={(e)=> e.stopPropagation()}>
            <Texts variant={'p'} className='confirm-message'>{message}</Texts>
            <div className='confirm-delete-buttons'>
                <Button text="Cancel" variant="outlined" className='cancel-button'onClick={onCancel}></Button>
                <Button text="Delete" variant="filled" className='confirm-delete-button' onClick={onConfirm}></Button>
            </div>
        </div>
    </div>
  )
}
