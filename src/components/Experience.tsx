import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey building innovative solutions and contributing to impactful projects
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Experience header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    exp.type === 'internship' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-500'
                  }`}>
                    {exp.type === 'internship' ? (
                      <Briefcase className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 text-sm text-gray-400 space-y-1 lg:text-right">
                  <div className="flex items-center lg:justify-end space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <Award className="w-5 h-5 text-blue-400 mr-2" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-blue-500/20 transition-all"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience type badge */}
              <div className="absolute top-6 right-6">
                <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                  exp.type === 'internship'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {exp.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tableau Essential Training', issuer: 'LinkedIn Learning', year: '2024' },
              { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
              { title: 'Python Web Development', issuer: 'Udemy', year: '2020' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-green-500/30 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-400 text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;