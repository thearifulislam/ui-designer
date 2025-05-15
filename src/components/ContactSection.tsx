import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      shapes: ["circle", "square"],
      colors: ["#F6A300", "#FFB6C1", "#87CEEB"],
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
      scalar: 0.75,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      timeline: "",
      message: "",
    });
    launchConfetti();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green">Amazing</span> Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital vision into reality? I'm here to help bring your UI design project to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/50">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-yellow to-green text-transparent bg-clip-text">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-yellow/10 to-green/10 p-3 rounded-xl mr-4">
                    <Phone className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:01938434733"
                      className="font-medium text-gray-800 hover:text-yellow transition-colors duration-200"
                    >
                      +88 01938434733
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-yellow/10 to-green/10 p-3 rounded-xl mr-4">
                    <Mail className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:acs.arifulislam@gmail.com"
                      className="font-medium text-gray-800 hover:text-yellow transition-colors duration-200"
                    >
                      acs.arifulislam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-yellow/10 to-green/10 p-3 rounded-xl mr-4">
                    <MapPin className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">Khulna, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Find Me On</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/arifulislamofficialprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-xl hover:bg-green hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/_md._ariful_islam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-xl hover:bg-green hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/arifulcreatorstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-xl hover:bg-green hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a
                    href="https://behance.net/arifulcreatorstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-xl hover:bg-green hover:text-white transition-all duration-300"
                    aria-label="Behance"
                  >
                    <FaBehance className="h-5 w-5" />
                  </a>
                  <a
                    href="https://dribbble.com/arifulcreatorstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-xl hover:bg-green hover:text-white transition-all duration-300"
                    aria-label="Dribbble"
                  >
                    <FaDribbble className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/50"
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-yellow to-green text-transparent bg-clip-text">
                Start Your Project
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Mobile App Design">Mobile App Design</option>
                    <option value="Design System">Design System</option>
                    <option value="UI Audit">UI Audit</option>
                    <option value="Prototype">Interactive Prototype</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="Less than 1 month">Less than 1 month</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow/50"
                  rows={5}
                  placeholder="Tell me about your project goals, requirements, and any specific features you'd like to include..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green text-white px-8 py-4 rounded-xl font-medium flex items-center hover:shadow-lg transition-all duration-300 hover:bg-green/90"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
