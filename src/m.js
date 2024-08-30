import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { FaRocket, FaSchool, FaAndroid, FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";
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
    const animate = (time) => {
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

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
        <div className="flex justify-center items-center h-screen text-black text-7xl">
          <div className="loader">
            <a>Loading</a>
            <p className="mt-20 text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
              {text}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="hidden md:block  relative w-full min-h-screen -white">
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
                className="z-40 mt-15 flex w-[600px] h-[800px] pb-20 opacity-70"
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
                <a className="text-3xl font-black absolute top-[600px] left-64">
                  <span className="text-white">M </span>
                  <span className="text-blue-500">Jay</span>
                </a>
              </motion.div>

              <motion.div
                className="bg-black z-40 text-7xl fixed right-0 top-0 bottom-0 font-black w-1/5 hidden top-0 xl:block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="-rotate-90 text-blue-500 mt-96">
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
              className="backdrop-blur-md h-screen pt-40"
              style={{ opacity, scale }}
            >
              <div className="grid ml-20 grid-cols-5 md:grid-cols-4 text-4xl justify-center font-black gap-10 pr-96 text-center">
                <div className="p-4 text-white h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange1">
                  JavaScript
                </div>
                <div className="p-4 text-blue-500 h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange2">
                  Java
                </div>
                <div className="p-4 text-white h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange3">
                  C
                </div>
                <div className="p-4 text-white h-48 backdrop-blur-sm bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange4">
                  C++
                </div>
                <div className="p-4 text-white h-48 bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange5">
                  MERN
                </div>
                <div className="p-4 text-white h-48 bg-gray-200 rounded-lg shadow-md animate-colorChange6">
                  PHP
                </div>
                <div className="p-4 text-white h-48 bg-gray-200 rounded-lg shadow-md animate-colorChange7">
                  Android
                </div>
                <div className="p-4 text-white h-48 bg-gray-900 bg-opacity-10 rounded-lg shadow-md animate-colorChange8">
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
                    background-color: #a0aec0;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
                @keyframes colorChange6 {
                  0% {
                    background-color: #edf2f7;
                  }
                  50% {
                    background-color: #e2e8f0;
                  }
                  100% {
                    background-color: #edf2f7;
                  }
                }
                @keyframes colorChange7 {
                  0% {
                    background-color: #edf2f7;
                  }
                  50% {
                    background-color: #cbd5e0;
                  }
                  100% {
                    background-color: #edf2f7;
                  }
                }
                @keyframes colorChange8 {
                  0% {
                    background-color: #1a202c;
                  }
                  50% {
                    background-color: #f56565;
                  }
                  100% {
                    background-color: #1a202c;
                  }
                }
              `}</style>

              <div className="mt-96 mb-96 w-4/5 ml-20 ">
                <h2 className="text-4xl pt-20 font-black mb-6 text-blue-500">
                  Projects
                </h2>
                <div
                  className="h-80 w-4/5 h-screen mb-96 overflow-y-scroll space-y-4 pr-6"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#4A5568 #2D3748" }}
                >
                  <div className="bg-white p  shadow-md rounded-lg p-6">
                    <FaRocket className="text-blue-500 text-2xl mb-4" />
                    <h3 className="text-2xl font-bold">NASA Site API</h3>
                    <p className="mt-2 text-gray-700">
                      Developed using the MERN stack, this project integrates NASA's API to
                      display various space-related data.
                    </p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <FaSchool className="text-blue-500 text-2xl mb-4" />
                    <h3 className="text-2xl font-bold">Learning Management Site</h3>
                    <p className="mt-2 text-gray-700">
                      A microservices-based learning management system, built with the MERN
                      stack, managing student data efficiently.
                    </p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <FaAndroid className="text-blue-500 text-2xl mb-4" />
                    <h3 className="text-2xl font-bold">Serenity Care App</h3>
                    <p className="mt-2 text-gray-700">
                      An Android application that connects caregivers to patients in need
                      of assistance.
                    </p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <FaHeartbeat className="text-blue-500 text-2xl mb-4" />
                    <h3 className="text-2xl font-bold">Healthcare System</h3>
                    <p className="mt-2 text-gray-700">
                      Developed a robust healthcare management system integrating various
                      services for patients and doctors.
                    </p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <FaShieldAlt className="text-blue-500 text-2xl mb-4" />
                    <h3 className="text-2xl font-bold">Security System</h3>
                    <p className="mt-2 text-gray-700">
                      A comprehensive security system designed to protect sensitive
                      information and prevent unauthorized access.
                    </p>
                  </div>
                </div>
                {/* <ContactMe/> */}
              </div>
              <ContactMe/>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
