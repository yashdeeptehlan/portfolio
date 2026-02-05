import React from 'react';
import { User, Heart, Target, Zap, Globe, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-wisteria/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tea-green to-neon-violet bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-light-cyan max-w-4xl mx-auto leading-relaxed">
            Recent AI Solutions Development graduate with practical experience and passion for innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-wisteria/30 hover:border-neon-violet/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-wisteria to-neon-violet rounded-xl flex items-center justify-center">
                  <User className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">My Journey</h3>
              </div>
              <div className="space-y-6 text-light-cyan leading-relaxed text-base lg:text-lg">
                <p>
                  Originally from <span className="text-tea-green font-medium">New Delhi, India</span>, I embarked on an exciting journey to 
                  <span className="text-neon-violet font-medium"> Toronto, Canada</span> to pursue my passion for artificial intelligence and technology.
                </p>
                <p>
                  As a recent AI Solutions Development graduate, I've gained practical experience through co-op positions and internships, 
                  working on cutting-edge projects involving RAG systems, SQL optimization, and blockchain applications.
                </p>
                <p>
                  I'm a <span className="text-tea-green font-medium">quick learner</span> with 
                  <span className="text-neon-violet font-medium"> strong problem-solving abilities</span>, constantly pushing the boundaries of what's possible 
                  through hands-on experience with modern frameworks and cloud platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Key points */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-wisteria/30 hover:border-tea-green/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-tea-green to-light-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Passion-Driven</h4>
                  <p className="text-light-cyan/70 text-sm lg:text-base">Deep interest in AI, machine learning, and innovative solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-wisteria/30 hover:border-neon-violet/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-wisteria to-neon-violet rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Solution-Focused</h4>
                  <p className="text-light-cyan/70 text-sm lg:text-base">Building practical, scalable solutions using modern frameworks</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-wisteria/30 hover:border-tea-green/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-tea-green to-light-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Engineering Mindset</h4>
                  <p className="text-light-cyan/70 text-sm lg:text-base">Strong problem-solving abilities with hands-on experience</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-wisteria/30 hover:border-light-cyan/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-light-cyan to-wisteria rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold text-white">Global Perspective</h4>
                  <p className="text-light-cyan/70 text-sm lg:text-base">Cross-cultural experience with cloud platforms and modern technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats - Moved outside grid and centered */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <div className="bg-gradient-to-br from-wisteria/10 to-coffee-bean/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-wisteria/30 max-w-2xl w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-tea-green to-neon-violet bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-xs lg:text-sm text-light-cyan/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-light-cyan to-wisteria bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-xs lg:text-sm text-light-cyan/70">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-wisteria to-neon-violet bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-xs lg:text-sm text-light-cyan/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-tea-green to-light-cyan bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-xs lg:text-sm text-light-cyan/70">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;