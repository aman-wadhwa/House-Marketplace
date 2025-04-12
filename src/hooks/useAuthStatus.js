import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

//to solve memory leak eerror
import { useRef } from "react"

export const useAuthStatus = () => {
    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setcheckingStatus] = useState(true)

    
    //to solve memory leak eerror
    const isMounted = useRef(true)


    useEffect(()=>{
       if(isMounted){
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user) setloggedIn(true)
            setcheckingStatus(false)
        })
       }
       return ()=>{
        isMounted.current = false
       }
    }, [isMounted])
  return {loggedIn, checkingStatus}
}


