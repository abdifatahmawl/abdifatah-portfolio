import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#111318] dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-[#FF7331]">Abdifatah Mawlid</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineer | Full-Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Passionate about building robust, efficient, and innovative software solutions.
              I develop digital services that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary text-center">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Get In Touch
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF7331] via-[#7331FF] to-[#FFC01E] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF7331] to-[#7331FF] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Abdifatah Mawlid"
                    className="w-full h-full object-cover rounded-full absolute inset-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* <span className="text-6xl md:text-8xl font-bold text-white z-10">AM</span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-[#FF7331] mb-2">2+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-[#7331FF] mb-2">10+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-[#FFC01E] mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-300">Technologies</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

