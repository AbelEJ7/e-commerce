import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
const SignIn = ()=>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =await createUserDocumentFromAuth(user);
        
    }
    return(
        <div>
            <h1>this is sign up</h1>
            <button onClick={logGoogleUser}>Sign in withGoogle</button>
        </div>
        
    )
}
export default SignIn;