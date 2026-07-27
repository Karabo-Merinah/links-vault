import React from 'react'
import addIcon from '@/assets/pictures/add.png'
import {Texts} from '@/components/Texts/Texts'
import {Button} from '@/components/Button/Button'
import { ContentContainer }  from '../Texts/ContentContainer'
import { SearchBar } from '../SearchBar/SearchBar'
import link from '@/assets/pictures/link.png'
type AddLinkProps={
    onAddClick:()=> void,
     searchWord:string,
  onSearchChange:(value:string)=> void

}

export const AddLink:React.FC<AddLinkProps> = ({onAddClick,searchWord,onSearchChange}) => {
  return (
   <ContentContainer className='add-section'>
    <div className='buttons-text-wrapper'>
     <div className='logo-slogan'>
      <div className='logo-row'>
            <img src={link} className='logo-img'></img>
         <Texts variant={'h1'} className='logo'>Links Vault</Texts>
          </div>
         <Texts variant={'h3'} className='slogan'>Saving links has gotten better </Texts>
         </div>
        <div className='add-bottom-row'>
           <div className='buttons-setup'>
        <SearchBar value={searchWord} onChange={onSearchChange} />
    <Button variant={"filled"} text="Add a link" icon={addIcon} onClick={onAddClick} className='add-link-button'></Button>
    </div>
    </div>
    </div>
    
  </ContentContainer>
  )
}
