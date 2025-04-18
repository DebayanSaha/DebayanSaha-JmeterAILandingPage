import React, { useState, useEffect } from 'react';
import './index.css';
import {
  Bot,
  PlayCircle,
  Brain,
  Mail,
  Link,
  Monitor,
  Terminal,
  Github,
  Twitter,
  Linkedin,
  Rocket,
} from 'lucide-react';

// ScrollProgress Component
function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}

// BackgroundParticles Component
function BackgroundParticles() {
  const particles = Array.from({ length: 50 }, () => ({
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    size: `${Math.random() * 8 + 2}px`,
    duration: `${Math.random() * 10 + 5}s`,
  }));

  return (
    <div className="background-animation">
      <div className="wave-background"></div>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float ${p.duration}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, image, index }: FeatureCardProps) {
  return (
    <div
      className="relative group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-scale-in card-neon-border"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8 relative">
        <div className="absolute -top-6 left-6">
          <div className="h-12 w-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg card-icon-spin">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-100 mt-6">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const features = [
    {
      icon: Terminal,
      title: "Automated Test Creation",
      description: "Write prompts and JMeterAI will generate test plans for JMeter automatically",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: PlayCircle,
      title: "Run Tests",
      description: "Select JMX files and JMeterAI will execute tests with optimal configurations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Brain,
      title: "Intelligent Analysis",
      description: "AI-powered root cause analysis with actionable suggestions to fix issues",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Mail,
      title: "Email Results",
      description: "Share comprehensive test results with your team via email",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Link,
      title: "Integrations",
      description: "Seamless integration with Jenkins and Grafana for complete CI/CD pipeline",
      image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Monitor,
      title: "Desktop & Cloud Support",
      description: "Run JMeterAI on desktop or cloud platforms like AWS",
      image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleJoinWaitlist = () => {
    window.open(
      'https://forms.gle/fPupfYePdgpWcD6r5',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen text-white relative">
      {/* Background animation spans the entire viewport */}
      <BackgroundParticles />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Fixed Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-xl font-bold text-white">JMeterAI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
            
          </div>
        </div>
      </header>
      
      {/* Content with proper padding to account for fixed header */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-16"> {/* Added padding top to account for fixed header */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
              <div className="text-center">
                <h1
                  className="text-6xl font-extrabold text-white mb-6 minor-glow-text"
                  style={{ animationDelay: '0.2s' }}
                >
                  AI Agent for Apache JMeter
                </h1>
                <h2
                  className="text-7xl font-extrabold text-white mb-6 glow-text"
                  style={{ animationDelay: '0.2s' }}
                >
                 JMeterAI 
                </h2>
                <p
                  className="text-2xl text-cyan-200 mb-8 animate-typewriter"
                  style={{ animationDelay: '0.4s' }}
                >
                  Performance testing made easy with artificial intelligence
                </p>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-full font-bold text-xl animate-gradient-sweep hover:scale-110 transition-all duration-300 inline-flex items-center"
                  style={{ animationDelay: '0.6s' }} onClick={handleJoinWaitlist}
                >
                  Join Waitlist
                  <Rocket className="ml-3 h-6 w-6 animate-bounce" />
                  
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" style={{ 
                background: 'linear-gradient(to bottom, #833ab4, #fd1d1d, #fcb045)',
                position: 'relative'
              }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-cyan-300 text-center mb-16 animate-fade-in">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FeatureCard {...feature} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div id="pricing" className="bg-gradient-to-r from-[#1a1a3a] to-[#2a1a5a] text-white py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {[
                { value: "Lean 6 Sigma Certified", delay: "0.2s" },
                // Add more stats here if needed, e.g., { value: "99% Uptime", delay: "0.4s" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 bg-gray-900/70 backdrop-blur-md rounded-2xl hover:scale-110 transition-transform animate-fade-in"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-5xl font-bold mb-4 text-cyan-300">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="documentation" className="bg-[#0a0a2a] text-white py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-5xl font-bold text-cyan-300 mb-12 animate-fade-in">
              Ready to transform your performance testing?
            </h2>
            <div className="flex justify-center gap-6">
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl animate-gradient-sweep hover:scale-110 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
              </button>
              <button
                className="bg-transparent border-2 border-cyan-500 text-cyan-500 px-10 py-5 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="bg-[#0a0a2a] text-gray-400 py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <Bot className="h-10 w-10 text-cyan-500 mr-3" />
                  <span className="text-2xl font-bold text-white">JMeterAI</span>
                </div>
                <div className="flex space-x-6">
                  <Github className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Twitter className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Linkedin className="hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-white font-semibold mb-6">Product</h3>
                <ul className="space-y-4">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-white font-semibold mb-6">Company</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-white font-semibold mb-6">Support</h3>
                <ul className="space-y-4">
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-gray-700 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              © 2024 JMeterAI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;