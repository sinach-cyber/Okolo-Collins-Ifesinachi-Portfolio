import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const experiences = [
    {
      number: "1",
      title: "Frontend Developer",
      company: "Personal projects",
      duration: "2024 - PRESENT",
      type: "REMOTE",
      description: "Designing and developing responsive using HTML, CSS, JavaScript, React, and modern frontend technologies. Building personal projects to strengthen frontend development skills and create practical digital solutions.",
      dark: true,
    },
    {
      number: "2",
      title: "Python Developer",
      company: "Personal Projects",
      duration: "2024 - PRESENT",
      type: "REMOTE",
      description: "Developing Python applications and scripts for practical problem-solving, automation, data processing, and learning software development concepts. Working with Python libraries such as Pandas and Numpy while continuously improving programming skills.",
      dark: false,
    },
    {
      number: "3",
      title: "Mathematics Tutor",
      company: "Independent / Private Tutoring",
      duration: "2023 - PRESENT",
      type: "REMOTE",
      description: "Providing mathematics tutoring and helping students understand mathematical concepts through clear explanations, step-by-step problem solving, and practical examples. Supporting students in developing confidence and improving their mathematical reasoning.",
      dark: false,
    },
    {
      number: "4",
      title: "Data Analysis Learner",
      company: "IBM / Coursera",
      duration: "2025 - PRESENT",
      type: "REMOTE",
      description: "Developing practical data analysis skills using Python, Pandas, Numpy, data visualization, and exploratory data analysis. Working through hands-on projects and exercises involving data cleaning, transformation, analysis, and interpretation.",
      dark: false,
    },
    {
      number: "5",
      title: "Python & Data Science",
      company: "Independent Learning",
      duration: "2025 - PRESENT",
      type: "REMOTE",
      description: "Continuously developing skills in Python programming, data science, machine learning, and artificial intelligence through structured courses, hands-on coding exercises, and personal projects.",
      dark: false,
    },
  ];

  return (
    <section id="experience" className="relative pb-20 pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative Icon - Top Right */}
          <motion.div
            className="absolute top-0 right-0 md:right-12"
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 80 80" fill="none">
              <g opacity="0.3">
                <rect x="10" y="20" width="3" height="40" fill="black" transform="rotate(45 10 20)" />
                <rect x="20" y="20" width="3" height="40" fill="black" transform="rotate(45 20 20)" />
                <rect x="30" y="20" width="3" height="40" fill="black" transform="rotate(45 30 20)" />
                <rect x="40" y="20" width="3" height="40" fill="black" transform="rotate(45 40 20)" />
                <rect x="50" y="20" width="3" height="40" fill="black" transform="rotate(45 50 20)" />
              </g>
            </svg>
          </motion.div>

          {/* Decorative Small Circle - Top Left */}
          <motion.div
            className="absolute -top-16 left-1/2 w-10 h-10 rounded-full border border-black flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            EXPERIENCE
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A journey through my learning, projects and professional experience, where I have developed practical skills in frontend development, Python programming, data analysis, and technical education.
          </motion.p>
        </div>

        {/* Experience List */}
        <motion.div
          className="space-y-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, _index) => (
            <motion.div
              key={exp.number}
              variants={itemVariants}
              className={`group relative z-[1] hover:z-20 flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 transition-all duration-300 ${exp.dark
                ? 'bg-black text-white'
                : 'bg-white text-black border border-black hover:border-[#C29A3A]'
                }`}
              whileHover={{ y: -4 }}
            >
              {/* Number Badge */}
              <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center font-bold text-xl ${exp.dark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                {exp.number}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {exp.title}
                  </h3>
                  <p className={`text-sm md:text-base ${exp.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.company}
                  </p>
                </div>

                {/* Duration with Divider */}
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`hidden md:block w-px h-16 ${exp.dark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                  <div className="text-right">
                    <p className={`text-xs md:text-sm font-light tracking-wider ${exp.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      JOB DURATION
                    </p>
                    <p className="text-sm md:text-base font-medium mt-1 whitespace-nowrap">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expandable Description - Hidden by default, shown on hover/focus */}
              <motion.div
                className={`absolute left-0 right-0 top-full mt-2 p-6 text-sm leading-relaxed z-30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${'bg-gray-900 text-gray-200'
                  }`}
              >
                <p>{exp.description}</p>
                <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${exp.type === 'REMOTE' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                  {exp.type}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
