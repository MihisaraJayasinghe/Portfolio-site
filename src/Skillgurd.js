import { motion } from 'framer-motion';

const SkillsGrid = ({ opacity, scale }) => (
  <motion.div className="backdrop-blur-md h-screen pt-40" style={{ opacity, scale }}>
    <div className="grid ml-4 xl:ml-20 grid-cols-2 md:grid-cols-4 text-4xl justify-center font-black gap-4 xl:gap-10 pr-0 xl:pr-96 text-center">
      {['JavaScript', 'Java', 'C', 'C++', 'MERN', 'PHP', 'Android', 'Python'].map((skill, index) => (
        <div key={index} className={`p-4 text-white h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange${index + 1}`}>
          {skill}
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillsGrid;
