import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "C#", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
      { name: "Kotlin", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" },
      { name: "Dart", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" },
      { name: "Flutter", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" },
      { name: "React", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "GitHub", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Spring Boot", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
      { name: "SQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" }
    ]
  }
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">{t.skills.title}</h2>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.skills.description}
        </motion.p>

        <motion.div
          className="bg-dark-800 rounded-xl p-8 shadow-2xl border border-dark-700"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="flex flex-col"
                variants={categoryVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl text-primary-500 font-semibold mb-6 pb-2 border-b border-dark-700">
                  {t.skills.categories[skillGroup.category.toLowerCase().replace(/ & /g, '_') as keyof typeof t.skills.categories]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-all hover:shadow-lg hover:-translate-y-1"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 flex items-center justify-center mb-3">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;