import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faIdCard, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=' position-fixed top-0 start-0 end-0 back'>
            <div className=' d-flex justify-content-between pt-2'>
                <div className=' d-flex '>
                    <img src="/images/1111r.jpg" className=' logoo ms-5 ' alt="" />
                    <h2 className=' pt-3 ps-2 '>Library</h2>
                </div>
                <div>
                    <div className=' d-flex pe-5 pt-2'>
                        <FontAwesomeIcon icon={faUser} className=" w-100 ps-5 pe-4 me-3 "></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faHeart} className=" w-100 ps-5 pe-5"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faIdCard} className=" w-100 px-5"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faSearch} className=" w-100 px-5 me-5"></FontAwesomeIcon>
                    </div>
                    <div className=' position-fixed end-0 pe-5 pt-2'>
                        <div className=' d-flex pe-5 '>
                            <Link className=' px-4 me-3 text-decoration-none text-dark'>Donate</Link>
                            <Link className=' px-3 me-3 text-decoration-none text-dark'>Library</Link>
                            <Link className=' px-4 me-3 text-decoration-none text-dark'>Account</Link>
                            <Link className=' px-4 me-2  text-decoration-none text-dark'>Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
