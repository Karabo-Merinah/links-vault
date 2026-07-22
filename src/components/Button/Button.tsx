
type ButtonProps={
    text?:string,
    icon?:string,
    onClick?:()=>void,
    variant?:"filled" | "outlined",
    className?:string,
    type?:"button"|"submit"

}

export const Button:React.FC<ButtonProps> = ({text,icon,onClick,variant,className,type}) => {
    
    let buttonClass = 'btn'

    if(variant === "filled"){
        buttonClass = buttonClass + ' btn-filled'
    }
    if(variant === "outlined"){
        buttonClass = buttonClass + ' btn-outlined'
    }
    if(className){
        buttonClass = buttonClass + ' ' + className
    }
    let buttonType: "button" | "submit" = "button"

    if(type === "submit"){
      buttonType='submit'
    }
    else{
        buttonType='button'
    }

    return (
    <button type={buttonType} className={buttonClass} onClick={onClick}>
        {icon && <img src={icon} className="btn-icon"/>}
        {text && <span>{text}</span>}
    </button>
  )
}
