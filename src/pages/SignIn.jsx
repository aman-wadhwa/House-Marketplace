import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showpass, setshowpass] = useState(false)
  const [formdata, setformdata] = useState({
    email : '',
    password : ''
  })
  const {email,password} = formdata
  const navigate = useNavigate()
  
  const onChange = (evt) => {
    setformdata((prevstate)=> ({
      ...prevstate,
      [evt.target.id] : evt.target.value
    }))
  }

    return (
      <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">Welcome back!</p>
          </header>
          <main>
            <form>
              <input type="email" className="emailInput" placeholder="Email" id='email' value={email} onChange={onChange}/>

              <div className="passwordInputDiv">
                <input type={showpass ? 'text' : 'password'} className="passwordInput" placeholder='Password' id='password' value={password} onChange={onChange}/>
                <img src={visibilityIcon} alt="show password" className="showPassword" onClick={()=> setshowpass(!showpass)}/>
              </div>

              <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

              <div className="signInBar">
                <p className="signInText">Sign In</p>
                <button className="signInButton">
                  <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                </button>
              </div>
            </form>

            <Link to='/sign-up' className="registerLink">Sign Up Instead</Link>
          </main>
        </div>
      </>
    )
  }
  
  export default SignIn
  