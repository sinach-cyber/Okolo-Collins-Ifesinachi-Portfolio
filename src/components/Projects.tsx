import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      category: "FRONTEND DEVELOPMENT",
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects, experience, and professional background using modern frontend technologies.",
      image: "/WhatsApp_Image_2026-09-12_at_19.29.50.webp",
      link: "https://github.com/sinach-cyber/collisxinachi-website",
      alt: "Personal Portfolio Website",
    },
    {
      category: "FRONTEND DEVELOPMENT",
      title: "Frontend Web Projects",
      description:
        "A collection of frontend development projects focused on creating responsive, user-friendly interfaces with clean layouts and modern web development practices.",
      image: "/frontend.webp",
      link: "https://github.com/sinach-cyber/VanillaFrontend",
      alt: "Frontend Development Project",
    },
    {
      category: "PYTHON & DATA",
      title: "Python Data Analysis Projects",
      description:
        "Python-based projects focused on data cleaning, analysis, visualization, and extracting useful insights from datasets using tools such as Pandas, NumPy, and Matplotlib.",
      image: "/data-analysis.webp",
      link: "https://github.com/sinach-cyber",
      alt: "Python Data Analysis Project",
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 relative">

          {/* Decorative Dots Pattern */}
          <motion.div
            className="absolute left-0 md:left-12 top-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-6 gap-1.5">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-black rounded-full"
                ></div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Circle */}
          <motion.div
            className="absolute -top-16 right-1/2 w-12 h-12 rounded-full border border-black flex items-center justify-center"
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
            PROJECTS
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my projects in frontend development, Python,
            and data analysis, demonstrating my ability to build practical
            and user-focused digital solutions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 md:p-8 p-4 ${index % 2 !== 0
                  ? "md:grid-flow-dense"
                  : ""
                  }`}
              >

                {/* Content */}
                <div
                  className={`flex flex-col justify-between space-y-6 ${index % 2 !== 0 ? "md:col-start-2" : ""
                    }`}
                >
                  {/* Category */}
                  <span className="inline-block px-6 py-2 bg-black text-white text-xs font-medium tracking-wider rounded-full w-fit">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* See Details */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black cursor-pointer group/link pt-4 border-t-2 border-black w-fit"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">
                      SEE DETAILS
                    </span>

                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.a>
                </div>
                {/* Project Image */}
                <div
                  className={`rounded-lg bg-gray-100 flex items-center justify-center ${index % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-auto object-contain rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;