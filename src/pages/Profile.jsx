import { useState, useEffect } from "react"
import { getAuth } from "firebase/auth"

function Profile() {
  const auth = getAuth()
  const [user, setuser] = useState(null)

  useEffect(()=>{
    setuser(auth.currentUser)
  },[])

    return (
      <>
        {user ? <h1>{user.displayName}</h1> : <p>user not login</p>}
      </>
    )
  }
  
  export default Profile
  