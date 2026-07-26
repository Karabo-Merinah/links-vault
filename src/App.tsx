import './App.css'
import { useEffect, useState } from 'react'
import {AddLink} from '@/components/AddLinksSection/AddLink'
import {Overlay} from '@/components/Overlay/Overlay'
import { LinkForm } from '@/components/LinkForm/LinkForm'
import {ReadList} from '@/components/ReadList/ReadList'
import { DeletePopUp } from '@/components/DeletePopUp/DeletePopUp'
import { Notification } from '@/components/Notification/Notification'
export type UserInputs = {
  id: string
  title: string
  url: string
  description: string
  tag?: string[]
}

function App() {
const [searchWord,setSearchWord]=useState("");
const [showAddForm,setShowAddForm]=useState(false)
const [list,setList]=useState<UserInputs[]>([])
const [edittingInputs,setEdittingInputs]=useState<UserInputs|null>(null)

const[notification,setNotification]=useState("")
const[showNotification,setShowNotification]=useState(false)

const[deleteId,setDeleteId]=useState<string|null>(null)

const showPopUp=(message:string)=>{
  setNotification(message)
  setShowNotification(true)
  setTimeout(()=>{
    setShowNotification(false)
  },5000)
}

useEffect(() => {
  const storedItems = localStorage.getItem("list")
  if(storedItems){
    setList(JSON.parse(storedItems))
  }
},[])

const  AddLinkInfo = (title: string, url: string, description: string, tag?: string[]) => {
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
  showPopUp("Link added!")
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
    (link.tag && link.tag.some((tagInput)=>tagInput.toLowerCase().includes(keyword)))
  )
}

const UpdateLinkInfo = (id: string, title: string, url: string, description: string, tag?: string[]) => {
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
  showPopUp("Link updated!")
}
const DeleteLinkInfo = (id: string) => {
 setDeleteId(id)
  }
  const confirmDelete=()=>{
    if(!deleteId){
      return
  }
  const updatedList = list.filter((link) => link.id !== deleteId)
  setList(updatedList)
  localStorage.setItem("list", JSON.stringify(updatedList))
  showPopUp("Link deleted!")
  setDeleteId(null)
}
const cancelDelete=()=>{
  setDeleteId(null)
}
   const StartEdit = (link: UserInputs) => {
  setEdittingInputs(link)
  setShowAddForm(true)
}

let overlayContent = null

if (showAddForm) {
  if (edittingInputs) {
    overlayContent = (
      <Overlay onClose={() => { setShowAddForm(false); 
      setEdittingInputs(null) }}>
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

           <AddLink onAddClick={()=> setShowAddForm(true)}searchWord={searchWord} onSearchChange={setSearchWord}/>
          <ReadList list={searchList} onDelete={DeleteLinkInfo} onEdit={StartEdit} searchWord={searchWord} onAddClick={()=> setShowAddForm(true)}/> 
      </div>
    </div>
    {overlayContent}
    {deleteId &&(
      <DeletePopUp message='Are you sure you want to delete this link?'
      onCancel={cancelDelete} onConfirm={confirmDelete} />

    )
    
    }
    <Notification message={notification} show={showNotification}></Notification>
  
     
    </>
  )
}

export default App