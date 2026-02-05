import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Data Science', 'Analytics', 'Blockchain'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categoryColors = {
    'AI/ML': 'from-purple-500 to-pink-500',
    'Data Science': 'from-blue-500 to-cyan-500',
    'Analytics': 'from-green-500 to-emerald-500',
    'Blockchain': 'from-yellow-500 to-orange-500'
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Innovative solutions combining AI, blockchain, and data science to solve real-world problems
          </p>
        </div>

        {/* Enhanced Category filter */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-gray-300 font-medium">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-slate-900/50 text-gray-300 hover:bg-slate-800/50 border border-slate-700 hover:border-slate-600 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project header */}
              <div className="p-6 lg:p-8 pb-4">
                <div className="flex items-start justify-between mb-6">
                  <div className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium bg-gradient-to-r ${
                    categoryColors[project.category as keyof typeof categoryColors]
                  } text-white shadow-lg`}>
                    {project.category}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs lg:text-sm rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project features */}
              <div className="px-6 lg:px-8 pb-6">
                <h4 className="text-sm lg:text-base font-semibold text-blue-400 mb-4 flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 text-sm lg:text-base flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project actions */}
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 flex space-x-4">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-lg text-white text-sm lg:text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-slate-600 px-4 py-3 rounded-lg text-gray-300 text-sm lg:text-base font-medium hover:bg-slate-800/50 hover:border-slate-500 transition-all hover:scale-105">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Projects stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-xl p-6 lg:p-8 border border-slate-800/30 hover:border-blue-500/20 transition-all">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {projects.length}
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Total Projects</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-xl p-6 lg:p-8 border border-slate-800/30 hover:border-green-500/20 transition-all">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
              700K+
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Data Points Processed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-xl p-6 lg:p-8 border border-slate-800/30 hover:border-purple-500/20 transition-all">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              12+
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Technologies Used</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-xl p-6 lg:p-8 border border-slate-800/30 hover:border-yellow-500/20 transition-all">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              30%
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Performance Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;