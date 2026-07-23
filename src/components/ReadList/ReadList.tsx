import React from 'react'
import  {type UserInputs} from '@/App'
import {Texts} from '@/components/Texts/Texts'
import { CardDisplay } from '@/components/CardDisplay/CardDisplay'
type List={
    list:UserInputs[],
    onDelete:(id:string)=>void,
    onEdit:(link:UserInputs)=>void
    searchWord:string
}


export const ReadList:React.FC<List> = ({list,onDelete,onEdit,searchWord}) => {

    if(list.length === 0){
    if(searchWord.trim().length > 0){
        return <Texts variant={'h3'} className='no-links'>No links match "{searchWord}"</Texts>
      } else {
        return <Texts variant={'h3'} className='no-links'>You currently do not have any saved links</Texts>
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
