import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = (
    {
        title,
        href,
    }
) => {
    
    return(
        <>
            <button {...href}>{title}</button>
        </>
    )
}

export default Button