import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Linkedin,
  Instagram,
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
    budget: "",
    country: "",
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
      colors: ["#FFB6C1", "#87CEEB", "#F6A300"],
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
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      scalar: 1.2,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      country: "",
      message: "",
    });

    // Show success animation
    launchConfetti();

    // This is where actual form submission would happen
  };

  return (
    <section id="contact" className="py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Let's Talk for Your <span className="text-green">Next Projects</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-yellow/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-black-soft/70">Phone</p>
                    <a
                      href="tel:01938434733"
                      className="font-medium text-black hover:text-green transition-colors duration-200"
                    >
                      +88 01938434733
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-black-soft/70">Email</p>
                    <a
                      href="mailto:acs.arifulislam@gmail.com"
                      className="font-medium text-black hover:text-green transition-colors duration-200"
                    >
                      acs.arifulislam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-black-soft/70">Address</p>
                    <p className="font-medium">Khulna, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
  <a
    href="https://facebook.com/arifulislamofficialprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green/10 p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300"
    aria-label="Facebook"
  >
    <FaFacebookF className="h-5 w-5" />
  </a>
  <a
    href="https://www.instagram.com/_md._ariful_islam/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green/10 p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300"
    aria-label="Instagram"
  >
    <FaInstagram className="h-5 w-5" />
  </a>
  <a
    href="https://linkedin.com/in/arifulcreatorstudio"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green/10 p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn className="h-5 w-5" />
  </a>
  <a
    href="https://behance.net/arifulcreatorstudio"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green/10 p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300"
    aria-label="Behance"
  >
    <FaBehance className="h-5 w-5" />
  </a>
  <a
    href="https://dribbble.com/arifulcreatorstudio"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green/10 p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300"
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
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                  >
                    <option value="">Select budget range</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                    placeholder="United States"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    I'm interested in...
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                  >
                    <option value="">Select a service</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Application Design">
                      Application Design
                    </option>
                    <option value="Website Design">Website Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green text-white px-6 py-3 rounded-full font-medium flex items-center hover:shadow-lg transition-all duration-300"
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
