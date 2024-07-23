import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function M() {
  const [text, setText] = useState('');
  const fullText = "I am a skilled software developer specializing in web development and Java programming. With expertise in MERN stack and WordPress, I have successfully delivered a variety of online projects. My passion lies in crafting efficient and user-friendly solutions that leverage cutting-edge technologies to solve complex challenges.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 
    0);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block relative w-full min-h-screen bg-white"
        style={{
          backgroundImage: "url('./pexels-alex-andrews-271121-861443.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "repeat-y",
        
        }}

        

      >
        <div className=' pl-20 z-40 pt-5 pb-5 sticky    inline-flex top-0   backdrop-blur-lg font-black bg- -300 w-full'>
          <nav className='pl-2'>home</nav>
          <nav className='pl-2'>about</nav>
        </div>
        <div className="flex flex-col xl:flex-row">
          <motion.div 
            className="flex-col w-1/3 p-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-blue-500 font-black font-helvatica text-8xl">
              Software <br /> Engineer
            </div>
            <motion.div 
              className="mt-20 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <p className="mt-20 text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
                {text}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className=" z-50 relative mt-15 flex w-full h-screen opacity-70"
            style={{
              backgroundImage: "url('./image1.png')",
              backgroundSize: "cover",
              opacity: "80%",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <a className="text-5xl font-thin font-black absolute  top-[600px]  left-64">
              <span className="text-white">M </span>
              <span className="text-blue-500">Jay</span>
            </a>
          </motion.div>

          <motion.div 
            className="   bg-black text-7xl font-black w-1/5 hidden top-0 xl:block rounded-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="-rotate-90 text-blue-500 mt-96">
              <span className="text-white">Mihisara</span> Jayasinghe
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="inline-flex z-50 absolute top-[750px] text-xl bg-gray-300 h-24 w-full  font-black justify-left pt-5 " 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <nav className="pl-4 text-gray-600">UI/UX</nav>
          <nav className="pl-4">Full Stack</nav>
          <nav className="pl-4 text-white">UI/UX</nav>
          <nav className="pl-4">Mobile</nav>
          <nav className="pl-4">UI/UX</nav>
        </motion.div>

        <div className='h-96'>
          kalfaskaskdaskdaaaskm
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative w-full min-h-screen bg-white"
        style={{
          backgroundImage: "url('./pexels-alex-andrews-271121-861443.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-black font-black text-4xl text-center">
            Software <br /> Engineer  <br />
            <span className="text-blue-500">M Jay</span>
          </div>
         
          <motion.div
          className="relative mt-8 w-full h-64 opacity-70"
          style={{
            backgroundImage: "url('./image1.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
        ></motion.div>
        </div>
        <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <p className="text-sm bg-gradient-to-t from-blue-700 to-black bg-clip-text text-transparent">
              {text}
            </p>
          </motion.div>
        <motion.div
          
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <a className="text-4xl font-black absolute bottom-4 left-4">
            <span className="text-white">M </span>
            <span className="text-blue-500">Jay</span>
          </a>
        </motion.div>

        <motion.div
          className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 text-2xl font-black"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-lg font-bold">Mihisara Jayasinghe</p>
          <p>sfdf</p>
        </motion.div>
      </div>
    </>
  );
}
