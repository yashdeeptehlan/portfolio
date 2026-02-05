import React, { useState } from 'react';
import { Code, Database, Brain, Cloud, Wrench, BarChart3 } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

  const categoryIcons = {
    'Programming': Code,
    'ML & AI Tools': Brain,
    'ML & Data': Brain,
    'Databases & Pipelines': Database,
    'Frameworks': Wrench,
    'Cloud & Tools': Cloud,
    'Other': BarChart3
  };

  const categoryColors = {
    'Programming': 'from-tea-green to-light-cyan',
    'ML & Data': 'from-wisteria to-neon-violet',
    'Databases & Pipelines': 'from-light-cyan to-tea-green',
    'Frameworks': 'from-neon-violet to-wisteria',
    'Cloud & Tools': 'from-tea-green to-wisteria',
    'Other': 'from-light-cyan to-neon-violet'
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-coffee-bean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tea-green to-neon-violet bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-light-cyan max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise across programming, ML/AI, data pipelines, and modern frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Category tabs - Enhanced for mobile */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:sticky lg:top-24">
              {Object.keys(skills).map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center space-x-3 p-4 lg:p-5 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-wisteria/20 to-neon-violet/20 border border-neon-violet/30 text-white shadow-lg'
                        : 'bg-wisteria/10 border border-wisteria/30 text-light-cyan hover:bg-wisteria/20 hover:text-white hover:border-wisteria/50'
                    }`}
                  >
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                    <span className="font-medium text-sm lg:text-base">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills display - Enhanced layout */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-wisteria/30">
              <div className="flex items-center space-x-4 mb-10">
                {React.createElement(categoryIcons[activeCategory as keyof typeof categoryIcons], {
                  className: "w-8 h-8 lg:w-10 lg:h-10 text-neon-violet"
                })}
                <h3 className="text-2xl lg:text-3xl font-bold text-white">{activeCategory}</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                  <div key={skill.name} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-light-cyan font-medium text-base lg:text-lg">{skill.name}</span>
                      <span className="text-neon-violet text-sm lg:text-base font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-coffee-bean/50 rounded-full h-3 lg:h-4 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          categoryColors[activeCategory as keyof typeof categoryColors]
                        } transition-all duration-1000 ease-out shadow-lg`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Skill summary */}
              <div className="mt-10 p-6 lg:p-8 bg-coffee-bean/30 rounded-xl border border-wisteria/20">
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4 flex items-center">
                  <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-neon-violet mr-3" />
                  Category Highlights
                </h4>
                <div className="text-light-cyan text-sm lg:text-base leading-relaxed">
                  {activeCategory === 'Programming' && (
                    "Proficient in Python for AI/ML development, SQL for database management, Solidity for smart contracts, and JavaScript for web development."
                  )}
                  {activeCategory === 'ML & Data' && (
                    "Extensive experience with TensorFlow, PyTorch, and Scikit-learn for machine learning, with expertise in data manipulation using Pandas and NumPy, plus LangChain for AI applications."
                  )}
                  {activeCategory === 'Databases & Pipelines' && (
                    "Expert in PostgreSQL and DuckDB for database management, PySpark for big data processing, and building robust ETL workflows for data integration."
                  )}
                  {activeCategory === 'Frameworks' && (
                    "Proficient with FastAPI for high-performance APIs, Flask and Django for web development, and building robust REST APIs for scalable applications."
                  )}
                  {activeCategory === 'Cloud & Tools' && (
                    "Hands-on experience with AWS cloud services and GCP Vertex AI for machine learning workloads, plus proficiency with Git/GitHub, Docker, and Tableau for data visualization."
                  )}
                  {activeCategory === 'Other' && (
                    "Experience with Ethereum blockchain development, smart contract creation, RAG systems for AI applications, and natural language processing techniques."
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;