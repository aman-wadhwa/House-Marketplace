import { useState } from "react"
import { getAuth, updateProfile} from "firebase/auth"
import { useNavigate} from "react-router-dom"
import { updateDoc , doc} from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

function Profile() {
  const auth = getAuth()
  const [changeDetails, setchangeDetails] = useState(false)
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

  const onsubmit = async () => {
    try{
      if(auth.currentUser.displayName!==name){
        await updateProfile (auth.currentUser, {
          displayName: name
        })
        
        const userRef = doc(db,'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name,
          email
        })
      }
      toast.success('Profile name Updated!', {
        autoClose: 1500
      })
    }
    catch(error){
      console.log(error)
      toast.error('Error updating Profile Name')
    }
  }

  const onChange = (evt) => {
    setformdata((prevstate)=>({
      ...prevstate,
      [evt.target.id] : evt.target.value
    }))
  }

    return (
      <>
        <div className="profile">
          <header className="profileHeader">
            <p className="pageHeader">My profile</p>
            <button className="logOut" type='butto' onClick={onlogout}>Logout</button>
          </header>
          <main>
            <div className="profileDetailsHeader">
              <p className="profileDetailsText">Personal Details</p>
              <p className="changePersonalDetails" onClick={()=> {
                changeDetails && onsubmit()
                setchangeDetails((prevstate)=>!prevstate)
              }}>
                {changeDetails ? 'done' : 'change'}
              </p>
            </div>
            <div className="profileCard">
              <form>
                <input type='text' id='name' className={!changeDetails ? 'profileName' : 'profileNameActive'} disabled={!changeDetails} value={name} onChange={onChange}/>
                
                <input type='email' id='email' className='profileEmail'  disabled='true' value={email} onChange={onChange}/>
              </form>
            </div>
          </main>
        </div>
      </>
    )
  }
  
  export default Profile
  