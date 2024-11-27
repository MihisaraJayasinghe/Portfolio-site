import { FaRocket, FaSchool, FaAndroid, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';

const Projects = () => (
  <div className="mt-20 xl:mt-96 w-full xl:w-4/5 ml-4 xl:ml-20">
    <h2 className="text-4xl font-black mb-6 text-blue-500">Projects</h2>
    <div className="h-80 w-full xl:w-4/5 h-screen mb-96 overflow-y-scroll space-y-4 pr-6" style={{ scrollbarWidth: "thin", scrollbarColor: "#4A5568 #2D3748" }}>
      {[{
        title: "NASA Site API", icon: <FaRocket />, description: "Developed using the MERN stack, this project integrates NASA's API to display various space-related data."
      }, {
        title: "Learning Management Site", icon: <FaSchool />, description: "A microservices-based learning management system, built with the MERN stack, managing student data efficiently."
      }, {
        title: "Serenity Care App", icon: <FaAndroid />, description: "An Android application that connects caregivers to patients in need of assistance."
      }, {
        title: "Healthcare System", icon: <FaHeartbeat />, description: "Developed a robust healthcare management system integrating various services for patients and doctors."
      }, {
        title: "Security System", icon: <FaShieldAlt />, description: "A comprehensive security system designed to protect sensitive information and prevent unauthorized access."
      }].map((project, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          {project.icon}
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
