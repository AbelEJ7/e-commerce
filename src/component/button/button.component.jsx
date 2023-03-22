// default
import './button.style.scss'
// inverted

// google sign in
const  BUTTON_TYPE_CLASSES ={
    google:'google-sign-in'
    
}
const Button = ({children ,buttonType ,...otherprops}) =>{
    
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {children}
        </button>
    )
}

export default Button;