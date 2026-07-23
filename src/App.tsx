import { Navbar } from '@/components/Navbar/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import {AddLink} from '@/components/AddLinksSection/AddLink'
import {Overlay} from '@/components/Overlay/Overlay'
import { LinkForm } from '@/components/LinkForm/LinkForm'
import {ReadList} from '@/components/ReadList/ReadList'
export type UserInputs = {
  id: string
  title: string
  url: string
  description: string
  tag?: string
}

function App() {
const [searchWord,setSearchWord]=useState("");
const [showAddForm,setShowAddForm]=useState(false)
const [list,setList]=useState<UserInputs[]>([])
const [edittingInputs,setEdittingInputs]=useState<UserInputs|null>(null)

useEffect(() => {
  const storedItems = localStorage.getItem("list")
  if(storedItems){
    setList(JSON.parse(storedItems))
  }
},[])

const  AddLinkInfo = (title: string, url: string, description: string, tag?: string) => {
  const newLink: UserInputs = {
    id: Date.now().toString(),
    title,
    url,
    description,
    tag,
  }
  const updatedList = [...list, newLink]
  setList(updatedList)
  localStorage.setItem("list", JSON.stringify(updatedList))
  setShowAddForm(false)
  window.alert("Link added!")
}
const SearchLinkInfo=()=>{
  if(searchWord.length === 0){
    return list
  }
  const keyword=searchWord.toLowerCase().trim()
  return list.filter((link) =>
    link.title.toLowerCase().includes(keyword) ||
    link.url.toLowerCase().includes(keyword) ||
    link.description.toLowerCase().includes(keyword) ||
    (link.tag && link.tag.toLowerCase().includes(keyword))
  )
}

const UpdateLinkInfo = (id: string, title: string, url: string, description: string, tag?: string) => {
  const updatedList = list.map((link) => {
    if (link.id === id) {
      const updatedLink: UserInputs = {
        id: link.id,
        title: title,
        url: url,
        description: description,
        tag: tag
      }
      return updatedLink
    } else {
      return link
    }
  })

  setList(updatedList)
  localStorage.setItem("list", JSON.stringify(updatedList))
  setShowAddForm(false)
  setEdittingInputs(null)
  window.alert("Link updated!")
}
const DeleteLinkInfo = (id: string) => {
  if(!window.confirm("Are you sure you want to delete this?")){
  }
  const updatedList = list.filter((link) => link.id !== id)
  setList(updatedList)
  localStorage.setItem("list", JSON.stringify(updatedList))
  showNotification("Link deleted!")
}
   const StartEdit = (link: UserInputs) => {
  setEdittingInputs(link)
  setShowAddForm(true)
}
useEffect(() => {
  if (Notification.permission === "default") {
    Notification.requestPermission()
  }
}, [])

const showNotification = (message: string) => {
  if (Notification.permission === "granted") {
    new Notification(message)
  }
}

let overlayContent = null

if (showAddForm) {
  if (edittingInputs) {
    overlayContent = (
      <Overlay onClose={() => { setShowAddForm(false); setEdittingInputs(null) }}>
        <LinkForm
          prevInputs={edittingInputs}
          onSubmit={(title, url, description, tag) =>
            UpdateLinkInfo(edittingInputs.id, title, url, description, tag)
          }
        />
      </Overlay>
    )
  } else {
    overlayContent = (
      <Overlay onClose={() => setShowAddForm(false)}>
        <LinkForm onSubmit={AddLinkInfo} />
      </Overlay>
    )
  }
}
 const searchList = SearchLinkInfo()
  return (
    <>
    <div id="app-container">
      <div id="scrollable">
          <Navbar searchWord={searchWord} onSearchChange={setSearchWord}/>
           <AddLink onAddClick={()=> setShowAddForm(true)}/>
          <ReadList list={searchList} onDelete={DeleteLinkInfo} onEdit={StartEdit} searchWord={searchWord} onAddClick={()=> setShowAddForm(true)}/> 
      </div>
    </div>
    {overlayContent}
  
     
    </>
  )
}

export default App