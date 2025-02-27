import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -left-10 bottom-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl mb-6">
            Ready to Start{" "}
            <span className=" text-red-800 md:mt-2">
              {" "}
              Your Learning Journey?
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Join thousands of learners who have transformed their careers
            through our courses. Your future starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/1 sm:w-auto px-8 py-4 bg-red-800 text-white rounded-full font-semibold text-lg hover:bg-red-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={() => navigate("/course-list")}
            >
              Explore Courses
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-red-800 text-2xl font-bold mb-2">16+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-red-800 text-2xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Professional Courses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-red-800 text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
