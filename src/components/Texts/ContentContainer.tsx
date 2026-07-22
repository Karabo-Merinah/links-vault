import React from 'react'

type ContainerProps={
    children:React.ReactNode,
    className?:string
}

export const ContentContainer:React.FC<ContainerProps> = ({children,className}) => {
  return (
    <div className={className} style={{maxWidth:1600,margin:'0 auto'}}>{children}</div>
  )
}
