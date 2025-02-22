import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton , useUser} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const educatorData = dummyEducatorData
  const {user} = useUser()
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
        <div className="flex justify-around items-center ">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-15 h-8 lg:w-8 m-1 cursor-pointer"
          />
          <h1 className="hidden md:block font-sans font-bold text-red-800 text-lg cursor-pointer">
            ABUKI-TECH
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} />
        )}
      </div>
    </div>
  );
}

export default Navbar