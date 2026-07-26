import React from 'react'
import searchIcon from '@/assets/pictures/search_icon.png'
type SearchbarProps={
    value:string,
    onChange:(value:string)=> void;
}

export const SearchBar:React.FC<SearchbarProps> = ({value,onChange}) => {
  return (
    <div className='search-wrapper'>
    <img src={searchIcon} alt="search for link" className='search-icon'/>
    <input type="text" className='search-input' placeholder="Search by url/tag/title/description" value={value}
    onChange={(e) => onChange(e.target.value)}/>
     </div>
  )
}
