import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
    const [email, setemail] = useState('')

    const onChange = (evt) => {
      setemail(evt.target.value)
    }

    const onSubmit = async (evt) => {
      evt.preventDefault()
      try{
        const auth = getAuth()
        await sendPasswordResetEmail(auth, email)
        toast.success('Reset Email Sent!')
      } catch(error){
        toast.error('Something went Wrong!')
      }
    }

    return (
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input type="email" placeholder='Email' className="emailInput" id='email' value={email} onChange={onChange} />
            <Link className="forgotPasswordLink" to='/sign-in'>Sign In</Link>
            <div className="signInBar">
              <div className="signInText">Send Reset Link</div>
              <button className="signInButton">
                <ArrowRightIcon fill='#ffffff' width='34px'    height='34px' />
              </button>

            </div>
          </form>
        </main>
      </div>
    )
  }
  
  export default ForgotPassword
  