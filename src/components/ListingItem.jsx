import { Link } from "react-router-dom"
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({listing, id, onDelete}) {
    console.log(listing.id)
    console.log(id)
    const convert = (s) => {
        return s.replace(/\B(?=(\d{3})+(?!\d))/g,',')
    }

  return (
    <li className="categoryListing">
        <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={(listing.imageUrls)[0]} alt={listing.name} className="categoryListingImg"/>
        <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">
                ${listing.offer ? convert(listing.discountedPrice.toString()) : convert(listing.regularPrice.toString())}
                {listing.type==='rent' && '/Month'}
            </p>
            <div className="categoryListingInfoDiv">
                <img src={bedIcon} alt="bed" />
                <p className="categoryListingInfoText">
                    {listing.bedrooms>1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
                </p>
                <img src={bathtubIcon} alt="icon" />
                <p className="categoryListingInfoText">
                {listing.bathrooms>1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}
                </p>
                </div>
        </div>
        </Link>
        {onDelete && (
            <DeleteIcon className="removeIcon" fill='rgb(231,76,60' onClick={()=>onDelete(listing.id, listing.name)}/>
        ) }
    </li>
  )
}

export default ListingItem
