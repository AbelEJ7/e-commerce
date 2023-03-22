import { useState } from "react";
import Button from "../button/button.component";
import {signInWithGooglePopup,
     createUserDocumentFromAuth,
    signInAuthUserWithEmailandPassword} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
const defaultFormFields ={
    password:'',
    email:'',
}
const SignInForm = ()=>{
    const [formFields,setFormFields] =useState(defaultFormFields);
    const {email,password}= formFields;
    
    
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        
    }

    const handleSubmit =async (event)=>{
        event.preventDefault();
        
        try{
            const response = await signInAuthUserWithEmailandPassword(email,password)
                
        }catch( error){
            switch (error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    break;
                default :
                console.log(error);
            }
        }

    }
    const handeleChange =(event)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value})
       console.log({...formFields})
    }

    return(
        <div className='sign-up-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput 
                lable="Email"
                required 
                type='email' 
                name="email"
                onChange={handeleChange}
                value={email}
                />
                <FormInput 
                lable="Password"
                required 
                type='password' 
                name="password"
                onChange={handeleChange}
                value={password}
                />
              
                <Button type="submit">Sign In</Button>

                <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
            </form>
        </div>
    )
}
export default SignInForm;