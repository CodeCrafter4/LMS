import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContex';
import SearchBar from '../../components/student/SearchBar';
import { useParams } from 'react-router-dom';
import CourseCard from '../../components/student/CourseCard';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';

const CoursesList = () => {
  const {navigate,allCourses}=useContext(AppContext)
  const {input}=useParams()
  const [filteredCourse, setFilteredCourse]=useState([])

  useEffect(()=>{
    if(allCourses && allCourses.length>0){
      const tempCourse=allCourses.slice()

      input?
        setFilteredCourse(tempCourse.filter(
        item=>item.courseTitle.toLowerCase().includes(input.toLowerCase())
      ))
      :setFilteredCourse(tempCourse)
    }
  },[allCourses,input])
  return (
    <>
      <div className='realtive md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-2xl font-semibold text-gray-800'>Course List</h1>
            <p className="text-gray-500">
              <span
                onClick={() => navigate("/")}
                className="text-blue-600 cursor-pointer"
              >
                Home
              </span>{" "}
              /<span> Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>
{
  input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
    <p>{input}</p>
    <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=>navigate('/course-list')}/>
  </div>
}


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {/* Course List */}
          {filteredCourse.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default CoursesList