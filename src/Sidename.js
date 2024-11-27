import { motion } from 'framer-motion';

const SideName = () => (
  <motion.div className="bg-black z-40 text-7xl fixed right-0 top-0 bottom-0 font-black w-1/5 hidden xl:block"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}>
    <p className="-rotate-90 text-blue-500 mt-96">
      <span className="text-white"> Mihisara</span> Jayasinghe
    </p>
  </motion.div>
);

export default SideName;