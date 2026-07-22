import React from 'react'
import close from '@/assets/pictures/close.png'
type OverlayProps={
    onClose:()=> void,
    children:React.ReactNode
}
export const Overlay:React.FC<OverlayProps> = ({onClose,children}) => {
 
  return (
    <div className='overlay-color' onClick={onClose}>
      <div className='overlay-box' onClick={(e) => e.stopPropagation()}>
        <img className='close-icon' src={close} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}


