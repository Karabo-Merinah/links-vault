
type ButtonProps = {
    text?: string,
    icon?: string,
    onClick?: () => void,
    variant?: "filled" | "outlined",
    className?: string,
    type?: "button" | "submit"

}

export const Button: React.FC<ButtonProps> = ({ text, icon, onClick, variant, className, type }) => {

    let buttonClass = 'btn'

    //Add the variant specific class for either filled or outlined on base of btn styling
    if (variant === "filled") {
        buttonClass = buttonClass + ' btn-filled'
    }
    if (variant === "outlined") {
        buttonClass = buttonClass + ' btn-outlined'
    }
    //gives more styling to the parent
    if (className) {
        buttonClass = buttonClass + ' ' + className
    }
    let buttonType: "button" | "submit" = "button"
    //defaults to a plain button unless using the submit button
    if (type === "submit") {
        buttonType = 'submit'
    }
    else {
        buttonType = 'button'
    }

    return (
        <button type={buttonType} className={buttonClass} onClick={onClick}>
            {icon && <img src={icon} className="btn-icon" />}
            {text && <span>{text}</span>}
        </button>
    )
}
