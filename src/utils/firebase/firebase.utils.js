import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
GoogleAuthProvider} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA9yzb_fzLSdK6QLZaU9t-8NUS5NFtRb2g",
    authDomain: "e-commerce-db-2c93c.firebaseapp.com",
    projectId: "e-commerce-db-2c93c",
    storageBucket: "e-commerce-db-2c93c.appspot.com",
    messagingSenderId: "996128594570",
    appId: "1:996128594570:web:56a3967cd5eb6bcc1a2b73"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth =getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth= async(userAuth)=>{
       //    1our_db the 2documetn 3 the uniqueid passed from google         // 
    const userDocRef =doc(db,'users',userAuth.uid);

    const userSnapsShot =await getDoc(userDocRef);

    if(!userSnapsShot.exists()){
        const {displayName,email} =userAuth;
        const createdAt =new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
            
        }catch(error){
            console.log('error creating user',error.message)
        }
    }

    return userDocRef;

  }