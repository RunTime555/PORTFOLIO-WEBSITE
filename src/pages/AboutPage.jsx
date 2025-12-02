import { motion } from 'framer-motion'

function AboutPage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express.js', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Python', level: 75 },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-centered digital experiences. With expertise in modern
              web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              My journey in web development started with a curiosity about how websites work,
              and it has evolved into a career focused on building scalable applications that
              solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                    className="bg-primary-600 dark:bg-primary-400 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
