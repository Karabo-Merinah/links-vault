import React from 'react'
import {Texts} from '@/components/Texts/Texts'
type NotificatioNprops={
    message:string,
    show:boolean
}
export const Notification:React.FC<NotificatioNprops> = ({message,show}) => {

     if(!show){
       return null
     }
    return (
    <div className='notification-styling'>
        <Texts variant={'p'}>{message}</Texts>
        </div>
  )
}
