
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import EmotionalButton from "@/components/EmotionalButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      shapes: ["heart"],
      colors: ["#faad1b", "#344c36", "#F6A300"],
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/contact-form-handler.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      if (data.sent) {
        toast({
          title: "Message sent!",
          description: "Your message has been sent successfully. Thank you!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          country: "",
          message: "",
        });
        launchConfetti();
      } else {
        toast({
          title: "Error",
          description: data.error || "There was an error sending your message.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Network problem. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-[#faad1b]">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Use the form
              below to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-[#f9f9f9] p-8 rounded-3xl h-full bg-gradient-to-br from-[#344c36]/10 to-[#faad1b]/10">
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-[#faad1b]/20 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-[#344c36]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:acs.arifulislam@gmail.com"
                        className="text-muted-foreground hover:text-[#faad1b] transition-colors"
                      >
                        acs.arifulislam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#faad1b]/20 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-[#344c36]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+8801938434733"
                        className="text-muted-foreground hover:text-[#faad1b] transition-colors"
                      >
                        +88 01938434733
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#faad1b]/20 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-[#344c36]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Khulna, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Follow Me</h3>
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
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  Send Message <Heart className="ml-2 text-[#faad1b] h-5 w-5" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleSelectChange(value, "budget")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$1,000 - $5,000">
                          $1,000 - $5,000
                        </SelectItem>
                        <SelectItem value="$5,000 - $10,000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="$10,000 - $20,000">
                          $10,000 - $20,000
                        </SelectItem>
                        <SelectItem value="$20,000+">$20,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium mb-2"
                  >
                    Country
                  </label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      handleSelectChange(value, "country")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Japan">Japan</SelectItem>
                      <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <EmotionalButton
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#faad1b] text-[#344c36] hover:bg-[#faad1b]/90 w-full md:w-auto mt-4 font-bold"
                  emotionType="heart"
                  numEmotions={8}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </EmotionalButton>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 rounded-3xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.251795164721!2d89.54032731427344!3d22.84564198502925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9006e0e2e6e1%3A0x8e6e7c2b1b1b1b1b!2sKhulna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1718030000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
