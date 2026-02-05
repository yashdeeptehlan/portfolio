import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to collaborate on innovative AI/ML projects or discuss opportunities? Let's start a conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact information - Enhanced */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-800/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-blue-400 mr-3" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 lg:p-6 rounded-xl bg-slate-900/50 border border-slate-800/30 hover:border-blue-500/30 transition-all group hover:scale-105"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium lg:text-lg group-hover:text-blue-400 transition-colors">Email</p>
                    <p className="text-gray-400 text-sm lg:text-base">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center space-x-4 p-4 lg:p-6 rounded-xl bg-slate-900/50 border border-slate-800/30 hover:border-green-500/30 transition-all group hover:scale-105"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium lg:text-lg group-hover:text-green-400 transition-colors">Phone</p>
                    <p className="text-gray-400 text-sm lg:text-base">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 lg:p-6 rounded-xl bg-slate-900/50 border border-slate-800/30">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium lg:text-lg">Location</p>
                    <p className="text-gray-400 text-sm lg:text-base">{personalInfo.address}</p>
                    <p className="text-gray-400 text-sm lg:text-base">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Social links */}
              <div className="mt-8 pt-8 border-t border-slate-800/30">
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-6">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all hover:scale-110 shadow-lg"
                  >
                    <Github className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </a>
                </div>
              </div>

              {/* Enhanced Availability */}
              <div className="mt-8 p-6 lg:p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Current Availability</h4>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  Open to co-op positions, internships, and full-time opportunities in AI/ML, data science, and blockchain development.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact form */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-800/50">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm lg:text-base font-medium text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm lg:text-base font-medium text-gray-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Project Discussion / Collaboration / Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 lg:py-5 rounded-xl text-white font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="text-base lg:text-lg">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;