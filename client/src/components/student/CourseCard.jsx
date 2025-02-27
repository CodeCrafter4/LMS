import React, { useContext } from "react";
import { AppContext } from "../../context/AppContex";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const rating = calculateRating(course);

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link
        to={"/course/" + course._id}
        onClick={() => scrollTo(0, 0)}
        className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative">
          <img
            className="w-full h-60 object-cover"
            src={course.courseThumbnail}
            alt={course.courseTitle}
          />
          {course.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {course.discount}% OFF
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {course.courseTitle}
          </h3>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                ({course.courseRatings.length})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-800">
              {currency}{" "}
              {(
                course.coursePrice -
                (course.discount * course.coursePrice) / 100
              ).toFixed()}
            </div>
            <button className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-900 transition-colors duration-300">
              Apply
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
