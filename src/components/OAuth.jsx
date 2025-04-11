import { Form, useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth"
import {doc, setDoc, getDoc} from 'firebase/firestore'
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import googleIcon from '../assets/svg/googleIcon.svg'
import { serverTimestamp } from "firebase/firestore"

function OAuth() {

    const navigate = useNavigate()
    const location = useLocation()

    const ongoogleclick = async () => {
        try{
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            //checking for user
            const userRef = doc(db, 'users', user.uid)
            const userSnap = await getDoc(userRef)

            if(!userSnap.exists()){
                await setDoc(doc(db,'users',user.uid), {
                    name : user.displayName,
                    email : user.email,
                    timestamp : serverTimestamp()
                })
                toast.success(`Welcome ${user.displayName}!`,{autoClose:1500})
                navigate('/')
            }
        } catch(error){
            toast.error('Could not Authorize with Google!', {autoClose:1500})
        }
    }


  return (
    <div className='socialLogin'>
        <p>Sign {location.pathname==='/sign-up' ? 'up' : 'in'} with </p>
        <button className="socialIconDiv" onClick={ongoogleclick}>
            <img className="socialIconImg " src={googleIcon} alt='google'/>
        </button>
    </div>
  )
}

export default OAuth
