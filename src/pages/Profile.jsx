import { useState, useEffect } from "react"
import { getAuth } from "firebase/auth"
import { useNavigate , Link} from "react-router-dom"
function Profile() {
  const auth = getAuth()
  const [formdata, setformdata] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email
  })
  const navigate = useNavigate()
  const {name, email} = formdata

  const onlogout = () => {
    auth.signOut()
    navigate('/')
  }

    return (
      <>
        <div className="profile">
          <header className="profileHeader">
            <p className="pageHeader">My profile</p>
            <button className="logOut" type='butto' onClick={onlogout}>Logout</button>
          </header>
        </div>
      </>
    )
  }
  
  export default Profile
  