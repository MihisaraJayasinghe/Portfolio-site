import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import ContactMe from "./Mailcontact";

export default function M() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [0, 1]);
  const opacity = useTransform(scrollY, [0, 900], [0, 1]);

  const fullText =
    "I am a skilled software developer specializing in web development and Java programming. With expertise in MERN stack and WordPress, I have successfully delivered a variety of online projects. My passion lies in crafting efficient and user-friendly solutions that leverage cutting-edge technologies to solve complex challenges.";

  useEffect(() => {
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
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center text-left w-full h-screen text-black text-4xl md:text-7xl">
          <div className="loader">
            <a>Loading</a>
            <p className="mt-20 text-sm md:text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
              {text}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="relative w-full min-h-screen">
            <div className="sticky top-0 backdrop-blur-lg font-black w-full p-4 md:p-5 flex justify-between items-center">
              <nav className="text-sm md:text-lg">Home</nav>
              <nav className="text-sm md:text-lg">About</nav>
            </div>

            <div className="flex flex-col md:flex-row">
              <motion.div
                className="flex-col w-full md:w-1/3 p-6 md:p-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-blue-500 font-black text-4xl md:text-8xl">
                  Software <br /> Engineer
                </div>
                <motion.div
                  className="mt-6 md:mt-20 text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <p className="mt-6 text-sm md:text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
                    {text}
                  </p>
                </motion.div>
              </motion.div>

              <div className="relative mt-6 md:mt-15 flex w-full md:w-1/2 mx-auto md:mx-0">
                <motion.div
                  className=" w-full h-[400px] md:h-[800px] bg-cover bg-center"
                  style={{ backgroundImage: "url('./image1.png')", opacity: "80%" }}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0 }}
                >
                  <a className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl font-black">
                    <span className="text-white">M </span>
                    <span className="text-blue-500">Jay</span>
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="bg-black z-40 text-4xl md:text-7xl fixed right-0 top-0 bottom-0 font-black w-full md:w-1/5 hidden md:block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="transform rotate-90 md:rotate-0 md:transform-none text-blue-500 mt-96 md:mt-0">
                  <span className="text-white"> Mihisara</span> Jayasinghe
                </p>
              </motion.div>

              <motion.div
                className="inline-flex z-50 fixed bottom-0 text-blue-500 text-sm md:text-xl bg-black h-10 w-full font-black justify-left pt-1"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <nav className="pl-2 md:pl-4 text-xs md:text-base text-gray-600">UI/UX</nav>
                <nav className="pl-2 md:pl-4 text-xs md:text-base">Full Stack</nav>
                <nav className="pl-2 md:pl-4 text-xs md:text-base text-white">UI/UX</nav>
                <nav className="pl-2 md:pl-4 text-xs md:text-base">Mobile</nav>
                <nav className="pl-2 md:pl-4 text-xs md:text-base">UI/UX</nav>
              </motion.div>
            </div>

            <motion.div
              className="backdrop-blur-md h-screen pt-40"
              style={{ opacity, scale }}
            >
              <div className="grid ml-6 md:ml-20 grid-cols-2 md:grid-cols-4 text-2xl md:text-4xl font-black gap-4 md:gap-10 pr-4 md:pr-96 text-center">
                <div className="p-2 md:p-4 text-white h-24 md:h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange1">
                  JavaScript
                </div>
                <div className="p-2 md:p-4 text-blue-500 h-24 md:h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange2">
                  Java
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange3">
                  C
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange4">
                  C++
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange5">
                  MERN
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 bg-gray-200 rounded-lg shadow-md animate-colorChange6">
                  PHP
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 bg-gray-200 rounded-lg shadow-md animate-colorChange7">
                  Android
                </div>
                <div className="p-2 md:p-4 text-white h-24 md:h-48 bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange8">
                  Python
                </div>
              </div>

              <style jsx>{`
                @keyframes colorChange1 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #2d3748;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange2 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #3182ce;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange3 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #4a5568;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange4 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #718096;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange5 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #ed8936;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange6 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #f6ad55;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange7 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #edf2f7;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange8 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #e53e3e;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                .animate-colorChange1 {
                  animation: colorChange1 10s infinite;
                }
                .animate-colorChange2 {
                  animation: colorChange2 10s infinite;
                }
                .animate-colorChange3 {
                  animation: colorChange3 10s infinite;
                }
                .animate-colorChange4 {
                  animation: colorChange4 10s infinite;
                }
                .animate-colorChange5 {
                  animation: colorChange5 10s infinite;
                }
                .animate-colorChange6 {
                  animation: colorChange6 10s infinite;
                }
                .animate-colorChange7 {
                  animation: colorChange7 10s infinite;
                }
                .animate-colorChange8 {
                  animation: colorChange8 10s infinite;
                }
              `}</style>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
