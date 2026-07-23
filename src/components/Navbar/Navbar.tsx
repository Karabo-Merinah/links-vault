

import { ContentContainer } from '@/components/Texts/ContentContainer'

import {Texts} from '@/components/Texts/Texts'
import { SearchBar } from '../SearchBar/SearchBar'

type NavbarProps={
  searchWord:string,
  onSearchChange:(value:string)=> void
}

export const Navbar:React.FC<NavbarProps> = ({searchWord,onSearchChange}) => {
  return (
    <ContentContainer className='navbar-cont'>
        <nav className='nav'>
          <div className='logo-slogan'>
         <Texts variant={'h1'} className='logo'>Links Vault</Texts>
         <Texts variant={'h3'} className='slogan'>Saving links has gotten better </Texts>
         </div>
        <SearchBar value={searchWord} onChange={onSearchChange} />
        </nav>
    </ContentContainer>
  )
}
