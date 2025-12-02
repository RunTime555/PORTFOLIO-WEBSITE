import { motion } from 'framer-motion'

function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization'],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Robust server-side solutions and API development.',
      features: ['Node.js & Express', 'Database Design', 'RESTful APIs'],
    },
    {
      title: 'Full Stack Solutions',
      icon: '🚀',
      description: 'End-to-end development from concept to deployment.',
      features: ['MERN Stack', 'Cloud Deployment', 'DevOps'],
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful and intuitive user interfaces.',
      features: ['Figma Design', 'User Research', 'Prototyping'],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white"
        >
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          What I can do for you
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 dark:text-primary-400 mr-2">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

