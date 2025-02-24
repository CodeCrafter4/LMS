import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContex';
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer';
const MyEnorollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);
  const [progressArray, setProgressArray] = useState([
    { lecturecompleted: 2, totalLecture: 4 },
    { lecturecompleted: 5, totalLecture: 5 },
    { lecturecompleted: 3, totalLecture: 6 },
    { lecturecompleted: 4, totalLecture: 4 },
    { lecturecompleted: 0, totalLecture: 3 },
    { lecturecompleted: 5, totalLecture: 7 },
    { lecturecompleted: 6, totalLecture: 8 },
    { lecturecompleted: 2, totalLecture: 6 },
    { lecturecompleted: 4, totalLecture: 10 },
    { lecturecompleted: 3, totalLecture: 5 },
    { lecturecompleted: 7, totalLecture: 7 },
    { lecturecompleted: 1, totalLecture: 4 },
    { lecturecompleted: 0, totalLecture: 2 },
    { lecturecompleted: 5, totalLecture: 5 },
  ]);
  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 ">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 md:pl_4 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lecturecompleted*100) /progressArray[index].totalLecture :0} className='bg-gray-300  rounded-full'/>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {
                    progressArray
                      [index] &&
                        `${progressArray[index].lecturecompleted} /${progressArray[index].totalLecture}` 
                    
                  }
                  <span>Lecture </span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-red-800 max-sm:text-xs text-white" onClick={() => navigate(`/player/${course._id}`)}>
                    {progressArray[index] && progressArray[index].lecturecompleted / progressArray[index].totalLecture===1 ? "Completed" : "On Going"}
                  
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer/>
    </>
  );
}

export default MyEnorollments