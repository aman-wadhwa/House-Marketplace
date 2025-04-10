import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const useAuthStatus = () => {
    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setcheckingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user) setloggedIn(true)
            setcheckingStatus(false)
        })
    })
  return {loggedIn, checkingStatus}
}


