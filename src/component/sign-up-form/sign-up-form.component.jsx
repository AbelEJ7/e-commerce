import { useState } from "react";
import Button from "../button/button.component";
import {createAuthUserWithEmailandPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
const defaultFormFields ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm = ()=>{
    const [formFields,setFormFields] =useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}= formFields;
    
    const  resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit =async (event)=>{
        event.preventDefault();
        if(password!== confirmPassword){
            alert('password do not match');
            return;
        }
        try{
            const {user} =await createAuthUserWithEmailandPassword(email,password);

            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch( error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use')
            }
            console.log(error)
        }

    }
    const handeleChange =(event)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value})
       console.log({...formFields})
    }

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                lable="Display Name"
                required 
                type='text' 
                name="displayName"
                onChange={handeleChange}
                value={displayName}
                />
                <FormInput 
                lable="Email"
                required 
                type='email' 
                name="email"
                onChange={handeleChange}
                value={email}
                />
                <FormInput 
                acupach=''
                lable="Password"
                required 
                type='password' 
                name="password"
                onChange={handeleChange}
                value={password}
                />
               <FormInput 
                lable="Confirm Password" 
                type='text' 
                required 
                name="displayName"
                onChange={handeleChange}
                value={confirmPassword}
                />
               
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;