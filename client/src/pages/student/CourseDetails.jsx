import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContex";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanaizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";
import axios from "axios";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAlredyEnrolled, setIsAlredyEnrolled] = useState(false);
  const [playData, setPlayData] = useState(null);

  const {
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNumberOfLectures,
    currency,
    backendUrl,
    userData,
    getToken,
  } = useContext(AppContext);

  const fechCourseData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/course/" + id);

      if (data.success) {
        setCourseData(data.courseData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const enrollCourse = async () => {
    try {
      if (!userData) {
        return toast.warn("Login to Apply");
      }
      if (isAlredyEnrolled) {
        return toast.warn("alredy Enrolled");
      }
      const token = await getToken();

      const { data } = await axios.post(
        backendUrl + "/api/user/purchase",
        { courseId: courseData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        const { session_url } = data;
        window.location.replace(session_url);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    fechCourseData();
  }, []);

  useEffect(() => {
    if (userData && courseData) {
      setIsAlredyEnrolled(userData.enrolledCourses.includes(courseData._id));
    }
  }, [userData, courseData]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2">
            {/* Course Preview */}
            <div className="rounded-xl overflow-hidden mb-8 bg-gray-100">
              {playData ? (
                <YouTube
                  videoId={playData.videoId}
                  opts={{
                    width: "100%",
                    height: "450",
                    playerVars: { autoplay: 1 },
                  }}
                  className="aspect-video "
                />
              ) : (
                <img
                  src={courseData.courseThumbnail}
                  alt={courseData.courseTitle}
                  className="w-full h-[450px] object-cover"
                />
              )}
            </div>

            {/* Course Title and Stats */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {courseData.courseTitle}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="font-medium mr-2">
                    {calculateRating(courseData)}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < Math.floor(calculateRating(courseData))
                            ? assets.star
                            : assets.star_blank
                        }
                        className="w-4 h-4"
                        alt=""
                      />
                    ))}
                  </div>
                  <span className="ml-2">
                    ({courseData.courseRatings.length} ratings)
                  </span>
                </div>
                <span>•</span>
                <span>
                  {courseData.enrolledStudents.length} students enrolled
                </span>
              </div>
            </div>

            {/* Course Content */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Course Content</h2>
              <div className="space-y-2">
                {courseData.courseContent.map((chapter, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={assets.down_arrow_icon}
                          className={`w-4 transition-transform ${
                            openSection[index] ? "rotate-180" : ""
                          }`}
                          alt=""
                        />
                        <span className="font-medium">
                          {chapter.chapterTitle}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {chapter.chapterContent.length} lectures •{" "}
                        {calculateChapterTime(chapter)}
                      </div>
                    </button>

                    <div
                      className={`${
                        openSection[index] ? "block" : "hidden"
                      } border-t`}
                    >
                      {chapter.chapterContent.map((lecture, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={assets.play_icon}
                              alt=""
                              className="w-4"
                            />
                            <span>{lecture.lectureTitle}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            {lecture.isPreviewFree && (
                              <button
                                onClick={() =>
                                  setPlayData({
                                    videoId: lecture.lectureUrl
                                      .split("/")
                                      .pop(),
                                  })
                                }
                                className="text-red-800 hover:text-red-700 font-medium"
                              >
                                Preview
                              </button>
                            )}
                            <span className="text-sm text-gray-500">
                              {humanaizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About this Course</h2>
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              />
            </div>
          </div>

          {/* Right Column - Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border rounded-xl p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {currency}{" "}
                    {(
                      courseData.coursePrice -
                      (courseData.discount * courseData.coursePrice) / 100
                    ).toFixed(2)}
                  </span>
                  {courseData.discount > 0 && (
                    <>
                      <span className="text-lg text-gray-500 line-through">
                        {currency} {courseData.coursePrice}
                      </span>
                      <span className="text-red-600">
                        {courseData.discount}% off
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-red-600">
                  <img
                    src={assets.time_left_clock_icon}
                    className="w-4 h-4 inline mr-1"
                    alt=""
                  />
                  5 days left at this price
                </p>
              </div>

              <button
                onClick={enrollCourse}
                className={`w-full py-3 rounded-lg font-semibold text-white mb-6 ${
                  isAlredyEnrolled
                    ? "bg-gray-400"
                    : "bg-red-800 hover:bg-red-700 transition-colors"
                }`}
              >
                {isAlredyEnrolled ? "Already Enrolled" : "Enroll Now"}
              </button>

              <div className="space-y-4 text-sm">
                <p className="font-medium">This course includes:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <img src={assets.time_clock_icon} className="w-5" alt="" />
                    {calculateCourseDuration(courseData)} total length
                  </li>
                  <li className="flex items-center gap-2">
                    <img src={assets.lesson_icon} className="w-5" alt="" />
                    {calculateNumberOfLectures(courseData)} lectures
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
