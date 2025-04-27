import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Calendar } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const About = () => {

  const { language } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2>{t.about.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-gray-100">
              {t.about.subtitle1} <span className="text-primary-500">{t.about.subtitle2}</span>
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                {t.about.description1}
              </p>
              <p>
                {t.about.description2}
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                {t.about.getintouch}
              </a>
              <a
                href="/CV_JoseArmandoEspinosaJimenez.pdf"
                className="btn btn-outline ml-4"
                download="CV_JoseArmandoEspinosaJimenez.pdf"
              >
                <FileText size={18} className="mr-2" />
                {t.about.downloadCV}
              </a>



            </motion.div>
          </motion.div>

          <motion.div
            className="bg-dark-700 rounded-lg p-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl mb-6 text-primary-500 font-semibold">{t.personal.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 text-primary-400 mr-4">
                  <Calendar size={20} />
                </span>
                <div>
                  <span className="block text-sm text-gray-400">{t.personal.ageTitle}</span>
                  <span className="block text-gray-200">{t.personal.age}</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 text-primary-400 mr-4">
                  <FileText size={20} />
                </span>
                <div>
                  <span className="block text-sm text-gray-400">{t.personal.educationTitle}</span>
                  <span className="block text-gray-200">{t.personal.education}</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-dark-600">
              <h4 className="text-lg mb-4 text-gray-200">{t.personal.languageTitle}</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{t.personal.spanish}</span>
                    <span className="text-gray-400"> {t.personal.seniority1}</span>
                  </div>
                  <div className="w-full bg-dark-600 h-2 rounded-full">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{t.personal.english}</span>
                    <span className="text-gray-400">{t.personal.seniority2}</span>
                  </div>
                  <div className="w-full bg-dark-600 h-2 rounded-full">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{t.personal.french}</span>
                    <span className="text-gray-400">{t.personal.seniority3}</span>
                  </div>
                  <div className="w-full bg-dark-600 h-2 rounded-full">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;