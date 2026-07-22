import React from 'react'

type TextProps={
    children:React.ReactNode,
    variant:string,
    className?:string,
}

export const Texts:React.FC<TextProps> = ({children,variant,className}) => {
  
    if(variant === 'h1')
        return <h1 className={className} >{children}</h1>
    if(variant === 'h2')
        return <h2 className={className}>{children}</h2>
    if(variant === 'span')
        return <span className={className}>{children}</span>
          if(variant === 'p')
        return <p className={className}>{children}</p>
    return (
    <div className={className}>{children}</div>
    )
}
