import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where, orderBy, limit, startAfter} from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import ListingItem from "../components/ListingItem"
   
function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setloading] = useState(true)
    const params = useParams()

    useEffect(()=>{
        const fetchListings = async () =>{
            try {
                const listingsRef = collection(db, 'listings')

                const q = query(listingsRef, where('type', '==' , params.categoryName), orderBy('timestamp', 'desc'), limit(10)) 

                const querySnap = await getDocs(q)

                const listings = []
                querySnap.forEach((doc)=>{
                    return listings.push({
                        id : doc.id,
                        data : doc.data()
                    })
                })
                setListings(listings)
                setloading(false)
            } catch (error) {
                toast.error('Could not fetch Listings!', {autoClose:1500})
            }
        }
        fetchListings()
    }, [params.categoryName])

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
            {params.categoryName==='rent' ? 'Places for rent' : 'Place for sale'}
        </p>
      </header>
      {loading ? <Spinner/> : listings && listings.length>0 ? (
        <>
        <main>
            <ul className="categoryListings">
                {listings.map((listing)=>{
                   return <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
                
                // return <h3>{listing.data.name}</h3>
                })}
            </ul>
        </main>
        </>
      ) : <p>No listings for {params.categoryName}</p>}
    </div>
  )
}

export default Category
