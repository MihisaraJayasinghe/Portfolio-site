import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function M() {
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 700], [0,1 ]);
  const scale2 = useTransform(scrollY, [2000, 3000], [0,1.5 ]);
  const opacity = useTransform(scrollY, [0, 900], [0, 1]);

  const fullText =
    "I am a skilled software developer specializing in web development and Java programming. With expertise in MERN stack and WordPress, I have successfully delivered a variety of online projects. My passion lies in crafting efficient and user-friendly solutions that leverage cutting-edge technologies to solve complex challenges.";

  useEffect(() => {
    // Initialize Lenis
     
    // Add scroll listener
    const animate = (time) => {
     
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Handle text animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 10);

    

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      // Cleanup Lenis
      
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen text-black text-7xl ">
          <div className="loader">
            <a>Loading</a>
            <p className="mt-20 text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
              {text}
            </p>
            <></>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:block relative w-full min-h-screen  -white">
            <div className="pl-20 z-30 pt-5 pb-5 sticky inline-flex top-0 backdrop-blur-lg font-black bg-300 w-full">
              <nav className="pl-2">home</nav>
              <nav className="pl-2">about</nav>
            </div>
            <div className="flex h-full flex-col xl:flex-row">
              <motion.div
                className="flex-col w-1/3 p-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-blue-500 font-black font-helvetica text-8xl">
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
                className="z-40   mt-15 flex w-[600px] h-[800px]  pb-20 opacity-70"
                style={{
                  backgroundImage: "url('./image1.png')",
                  backgroundSize: "100%",
                  opacity: "80%",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <a className="text-3xl  font-black absolute top-[600px] left-64">
                  <span className="text-white">M </span>
                  <span className="text-blue-500">Jay</span>
                </a>
              </motion.div>

              <motion.div
                className="bg-black z-40 text-7xl fixed right-0 top-0 bottom-0 font-black w-1/5 hidden top-0 xl:block "
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="-rotate-90 text-blue-500   mt-96">
                  <span className="text-white"> Mihisara</span> Jayasinghe
                </p>
              </motion.div>

              <motion.div
                className="inline-flex z-50 fixed bottom-0 text-blue-500 text-xl bg-black h-10 w-full font-black justify-left pt-1"
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
            </div>
            <motion.div
      className="   backdrop-blur-md h-screen pt-40   "
      style={{opacity, scale  }}
    >
      <div className="grid ml-20 grid-cols-5 md:grid-cols-4 text-4xl justify-center  font-black    gap-10 pr-96  text-center">
        <div className="p-4 text-white h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md">JavaScript</div>
        <div className="p-4 text-blue-500 h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md">Java</div>
        <div className="p-4 text-white backdrop- bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C</div>
        <div className="p-4 text-white backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C++</div>
        <div className="p-4 text-white h-48 bg-gray-900 bg-opacity-10 rounded-lg shadow-md">MERN</div>
        <div className="p-4 text-white bg-gray-200 rounded-lg shadow-md">PHP</div>
        <div className="p-4 text-white bg-gray-200 rounded-lg shadow-md">Android</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">python</div>
        {/* <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">Java</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C++</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">MERN</div>
        <div className="p-4 text-white bg-gray-900 rounded-lg shadow-md">PHP</div>
        <div className="p-4 text-white bg-gray-900 rounded-lg shadow-md">Android</div> */}
      </div>
    </motion.div>


    <motion.div
      className="   backdrop-blur-md    "
      style={{ scale, opacity }}
    >
 
    <div >

      <h1 className="text-7xl ml-20 mt-40 font-thin text-white">My Projects</h1>

      <div className="grid ml-20 mt-20 grid-cols-1 md:grid-cols-1 text-md max-w-fit  font-black   gap-4   text-center">
        <div className="p-4 text-white backdrop-blur-sm    rounded-lg shadow-md">
          
        
          
          <div className=" inline-flex">
            
            <div className="w-40 h-36 bg-gray-900">sfasf</div>
            <div className="text-left ml-20">sdsd
            <div className="text-center text-sm font-light">sasfdsf dfsdf dfsfsdfsd fsdfsdfdsf sdfsdfsd fsdfsdfds fsdfsdfsd fsdfsdf sdfsdfsd fsdfsdfsd fsdfsdf dsfsdf</div>
            </div>
          
            
             </div>
           
           
          
          
          
          </div>
        <div className="p-4 text-blue-500 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md">Java</div>
         
        {/* <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">Java</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">C++</div>
        <div className="p-4 text-white bg-gray-900 bg-opacity-10 rounded-lg shadow-md">MERN</div>
        <div className="p-4 text-white bg-gray-900 rounded-lg shadow-md">PHP</div>
        <div className="p-4 text-white bg-gray-900 rounded-lg shadow-md">Android</div> */}
      </div>
    </div>
  </motion.div>
</div>






          {/* Mobile View */}
          <div
            className="block md:hidden relative w-full min-h-screen bg-white"
            style={{
              backgroundImage: "url('./pexels-alex-andrews-271121-861443.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "repeat-y",
            }}
          >
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-black font-black text-4xl text-center">
                Software <br /> Engineer <br />
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
      )}
    </>
  );
}
