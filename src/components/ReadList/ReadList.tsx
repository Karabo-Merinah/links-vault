import React from 'react'
import  {type UserInputs} from '@/App'
import {Texts} from '@/components/Texts/Texts'
import { CardDisplay } from '@/components/CardDisplay/CardDisplay'
import {Button} from '@/components/Button/Button'
import illustration from '@/assets/pictures/add-link-illustration.png'
type List={
    list:UserInputs[],
    onDelete:(id:string)=>void,
    onEdit:(link:UserInputs)=>void
    searchWord:string,
    onAddClick:()=> void
}


export const ReadList:React.FC<List> = ({list,onDelete,onEdit,searchWord,onAddClick}) => {

    if(list.length === 0){
    if(searchWord.trim().length > 0){
        return <Texts variant={'h3'} className='no-links'>No links match <b style={{color:"black"}}>{searchWord}</b>, try adding it since it doesn't existt</Texts>
      } else {
        return(
        <div className='empty-list'>
          <img src={illustration} alt="add link illustration" className='empty-link-illustration'></img>
        <Texts variant={'h3'} className='no-links'>Oh no, you currently do not have any saved links.</Texts>
          <Texts variant={'h3'}className='no-links'>Please click on the button to add one</Texts>
        <Button variant={"filled"} text="Add a link"  onClick={onAddClick} className='add-empty'></Button>
        </div>
        )
      }
    }
  return(
   <>
   <div className='table'>
    <table className='title-headings'>
    <thead>
    <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Url</th>
    <th>Tag</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody>
   {
       list.map(product=>{
            return <CardDisplay key={product.id} link={product}  onDelete={onDelete} onEdit={onEdit}></CardDisplay>
        })  
   }
   </tbody>
    </table>
    </div>
   </>
    
     
    
)

}
