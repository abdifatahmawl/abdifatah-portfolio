import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'PHP', 'JavaScript', 'Node.js', 'Python'],
      color: 'bg-[#7331FF]'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Oracle', 'SQL Server', 'MongoDB'],
      color: 'bg-[#FF7331]'
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
      color: 'bg-[#FFC01E]'
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Swift (iOS)'],
      color: 'bg-[#7331FF]'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'NetBeans', 'VMware'],
      color: 'bg-[#FF7331]'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-solving', 'Teamwork', 'Communication'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            My Skills
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-gray-600 hover:text-primary-700 dark:hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

