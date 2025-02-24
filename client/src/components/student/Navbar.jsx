import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContex'

const Navbar = () => {

  const isCourseListPage=location.pathname.includes("/course-list")
  const { navigate, isEducator } = useContext(AppContext);

  const { openSignIn } =useClerk()
  const { user } =useUser()
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4} ${
        isCourseListPage ? "bg-white" : "bg-red-100/70"
      } `}
    >
      <div className="flex justify-around items-center ">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="w-15 h-8 lg:w-8 m-1 cursor-pointer"
        />
        <h1
          onClick={() => navigate("/")}
          className="hidden md:block font-sans font-bold text-red-800 text-lg cursor-pointer"
        >
          ABUKI-TECH
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Teacher Portal" : "Become a Mentor"}
              </button>
              |<Link to="/my-enrollments">Registered Courses</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-red-800 text-white px-5 py-2 rounded-full m-1"
          >
            Create Account
          </button>
        )}
      </div>
      {/* for phone screen  */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 ">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              |<Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="">
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar