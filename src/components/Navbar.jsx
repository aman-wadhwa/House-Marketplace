import { useNavigate, useLocation } from "react-router-dom"
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'
function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchcheck = (route) => {
        return (route === location.pathname)
    }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
            <li className="navbarListItem" onClick={()=> navigate('/')}>
                <ExploreIcon fill={pathMatchcheck('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                <p className={pathMatchcheck('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
            </li>
            <li className="navbarListItem"onClick={()=> navigate('/offers')}>
                <OfferIcon fill={pathMatchcheck('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                <p className={pathMatchcheck('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offer</p>
            </li>
            <li className="navbarListItem" onClick={()=> navigate('/profile')}>
                <PersonOutlineIcon fill={pathMatchcheck('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                <p className={pathMatchcheck('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
            </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
