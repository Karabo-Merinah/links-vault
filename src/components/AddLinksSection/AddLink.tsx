import React from 'react'
import addIcon from '@/assets/pictures/add_icon.png'
import {Texts} from '@/components/Texts/Texts'
import {Button} from '@/components/Button/Button'
import { ContentContainer }  from '../Texts/ContentContainer'
type AddLinkProps={
    onAddClick:()=> void
}

export const AddLink:React.FC<AddLinkProps> = ({onAddClick}) => {
  return (
   <ContentContainer className='add-section'>
    <Texts variant={'p'} className='add-link-text'>
 Add your new link and its information so that it can be saved for later use.
    </Texts>
    <Button variant={"filled"} text="Add a link" icon={addIcon} onClick={onAddClick} className='add-link-button'></Button>
  </ContentContainer>
  )
}
