import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // To show success or error messages

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a86179e', 'template_845r8vm', e.target, 'RBX5ncG1u1Sz11FZF')
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="bg-gray-900 text-left justify-start justify-items-start text-white py-16 px-4">
      <div className="container l-0 pr-40 mx-auto">
        <h2 className="text-4xl font-bold text-  mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-  items-center md:items-start gap-12">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <FaEnvelope className="text-3xl mb-4 text-blue-500" />
            <p className="text-lg">pasanmihisarajayasinghe@gmail.com</p>
             
            <FaMapMarkerAlt className="text-3xl mt-6 mb-4 text-blue-500" />
            <p className="text-lg">Colombo, Sri Lanka</p>
          </div>

          {/* Contact Form */}
         
          {/* Status Message */}
          {status && (
            <p className={`mt-6 text-lg font-bold ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
