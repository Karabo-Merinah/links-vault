import { useEffect, useState } from "react"
import { FormField } from "@/components/FormField/FormField"
import { Button } from "../Button/Button"

import type { UserInputs } from "@/App"

type LinkFormProps = {
  onSubmit: (title: string,
     url: string,
      description: string,
       tag?: string[]) => void,
        prevInputs?:UserInputs

}

export const LinkForm:React.FC<LinkFormProps>= ({onSubmit,prevInputs}) => {
 const [title,setTitle]=useState("")
 const [url,setUrl]=useState( "")
 const [description,setDescription]=useState("")
 const [tag,setTag]=useState("")

 const [titleError, setTitleError] = useState("")
const [urlError, setUrlError] = useState("")
const [descriptionError, setDescriptionError] = useState("")


const validateForm = (): boolean => {
  let isValid = true

  if (title.trim() === "") {
    setTitleError("Title is required")
    isValid = false
  } else if (title.trim().length > 30) {
    setTitleError("Title must be 30 characters or less")
    isValid = false
  } else {
    setTitleError("")
  }

  if (url.trim() === "") {
    setUrlError("URL is required")
    isValid = false
  } else if (!url.trim().startsWith("http://") && !url.trim().startsWith("https://")) {
    setUrlError("URL must start with http:// or https://")
    isValid = false
  } else if (!url.trim().includes(".")) {
    setUrlError("Please enter a valid URL (e.g. https://youtube.com)")
    isValid = false
  } else {
    setUrlError("")
  }

  if (description.trim() === "") {
    setDescriptionError("Description is required")
    isValid = false
  } else if (description.split("").length > 50) {
    setDescriptionError("Description must be 50 characters or less")
    isValid = false
  } else {
    setDescriptionError("")
  }

  return isValid
}

useEffect(()=>{
  if(prevInputs){
    setTitle(prevInputs.title)
    setDescription(prevInputs.description)
    setUrl(prevInputs.url )
    setTag(prevInputs.tag ? prevInputs.tag.join(","):"")
  }
},[prevInputs])

const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
      const isValid = validateForm()
  if (!isValid) {
    return
  }
    const tags=tag.split(",").map((input) => input.trim()).filter((input) => input!=="")
    onSubmit(title,url,description,tags)
     setTitle("")
    setUrl("")
    setDescription("")
    setTag("")
    setTitleError("")
    setUrlError("")
    setDescriptionError("")
    
}

    return (
  <form onSubmit={handleSubmit} className='link-form'>
 <FormField label="Title">
  <input type='text' value={title} placeholder="Please enter the title" onChange={(e) => setTitle(e.target.value)} className='inputs-styling'></input>
  {titleError && <span className='error-text'>{titleError}</span>}
</FormField>
<FormField label="Link(URL)">
  <input type='url' value={url} placeholder="Please enter link/url" onChange={(e) => setUrl(e.target.value)} className='inputs-styling'></input>
  {urlError && <span className='error-text'>{urlError}</span>}
</FormField>
<FormField label="Description">
 <textarea value={description} placeholder="Your description here" onChange={(e) => setDescription(e.target.value)} className='inputs-styling description-input' rows={3}></textarea>
  {descriptionError && <span className='error-text'>{descriptionError}</span>}
</FormField>
<FormField label="Tags">
  <input type='text' value={tag} placeholder="e.g. Work, School" onChange={(e) => setTag(e.target.value)} className='inputs-styling'></input>
</FormField>
      <div className='saving-button'>
      <Button type='submit' text="SAVE LINK" variant="filled" className='submit-btn'/>
      </div>
  </form>
  )
}