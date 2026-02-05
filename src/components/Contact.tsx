import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
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
    const mailSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">06 / CONTACT</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Let&apos;s build scalable AI products.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6">
            <h3 className="font-mono text-xs tracking-[0.16em] text-slate-400">CONTACT CHANNELS</h3>

            <div className="mt-5 space-y-4 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-3 text-slate-300 transition hover:text-cyan-300">
                <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-3 text-slate-300 transition hover:text-cyan-300">
                <Phone className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{personalInfo.phone}</span>
              </a>
              <p className="flex items-start gap-3 text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{personalInfo.location}</span>
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-700 p-2.5 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-700 p-2.5 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 rounded-md border border-slate-800 bg-[#0c1117] p-4 text-sm text-slate-400">
              Open to full-time AI Engineer, Backend Engineer, and Applied ML Engineer opportunities. {personalInfo.workAuthorization}.
            </div>
          </aside>

          <div className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-8">
            <h3 className="font-mono text-xs tracking-[0.16em] text-slate-400">SEND MESSAGE</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-md border border-slate-700 bg-[#0b1016] px-3 py-2.5 text-sm text-slate-100 outline-none ring-cyan-400/30 placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-md border border-slate-700 bg-[#0b1016] px-3 py-2.5 text-sm text-slate-100 outline-none ring-cyan-400/30 placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring"
                  placeholder="Email"
                />
              </div>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-700 bg-[#0b1016] px-3 py-2.5 text-sm text-slate-100 outline-none ring-cyan-400/30 placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring"
                placeholder="Subject"
              />

              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-md border border-slate-700 bg-[#0b1016] px-3 py-2.5 text-sm text-slate-100 outline-none ring-cyan-400/30 placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring"
                placeholder="Message"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/50 bg-cyan-400/10 px-4 py-2.5 font-mono text-xs tracking-wide text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/15"
              >
                <Send className="h-3.5 w-3.5" />
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
