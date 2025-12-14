import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold text-[#7331FF] mb-4">
              Personal Details
            </h2>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Full Name:</strong> Abdifatah Mawlid Hussein</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Tel:</strong> +252 63 4791732</p>
              <p><strong>Email:</strong> abdifatahmawlidhussein01@gmail.com</p>
              <p><strong>Address:</strong> Borama, Somaliland</p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold text-[#FF7331] mb-4">
              Career Objective
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To apply my software engineering knowledge and technical expertise to develop
              robust, efficient, and innovative software solutions. I aim to contribute to projects that
              enhance digital services, improve system performance, and solve real-world problems, while
              continuously advancing my skills in a dynamic tech environment.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold text-[#FFC01E] mb-4">
              Profile
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A motivated and detail-oriented software engineering student with practical
              experience in software development, digital payment systems, and programming. Proficient
              in both frontend and backend technologies, with strong problem-solving abilities and
              collaborative skills. Committed to delivering high-quality software solutions and supporting
              team objectives in professional environments.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold text-[#7331FF] mb-4">
              Work Experience
            </h2>
            <div className="border-l-4 border-[#FF7331] pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dahabshiil Group – Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">2022 – 2024</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Worked on debit and credit money operations systems.</li>
                <li>Developed and maintained software applications supporting financial transactions.</li>
                <li>Improved system reliability and performance by debugging and optimizing code.</li>
                <li>Collaborated with IT teams to ensure secure and efficient digital payment services.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-[#FF7331] mb-4">
              Educational Background
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#7331FF] pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Bachelor of Software Engineering (Expected 2026)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Amoud University – Faculty of Information Technology</p>
                <p className="text-gray-600 dark:text-gray-400">2023 – 2026</p>
              </div>
              <div className="border-l-4 border-[#FFC01E] pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  High School Certificate
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Al Aqsa Secondary School</p>
                <p className="text-gray-600 dark:text-gray-400">2018 – 2022</p>
              </div>
              <div className="border-l-4 border-[#FF7331] pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Primary & Middle School Certificate
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Ibnu Khaldun School</p>
                <p className="text-gray-600 dark:text-gray-400">2010 – 2018</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

