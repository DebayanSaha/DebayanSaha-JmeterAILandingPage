import React, { useState } from 'react';
import './index.css';
import {
  Bot,
  Users,
  Zap,
  Globe,
  Cpu,
  Network,
  Sparkles,
  ArrowRight,
  MailSearch,
  Linkedin,
  Rocket,
  Building2,
  Target,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { ScrollProgress } from './components/ScrollProgress';
import { KickLoadProduct } from './components/KickLoadProduct';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  index: number;
}

function ServiceCard({ icon: Icon, title, description, image, index }: ServiceCardProps) {
  return (
    <div
      className="relative group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-scale-in card-neon-border"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
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
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const services = [
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Intelligent agents that automate complex workflows, reducing manual effort and increasing efficiency across your entire development pipeline.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Users,
      title: "Remote Team Optimization",
      description: "Seamlessly coordinate distributed teams with AI-driven insights that enhance collaboration and productivity in remote work environments.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Network,
      title: "Intelligent DevOps",
      description: "Revolutionary DevOps solutions that leverage machine learning to predict issues, optimize deployments, and ensure system reliability.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Zap,
      title: "Performance Analytics",
      description: "Deep analytical insights powered by AI that provide actionable recommendations for system optimization and performance enhancement.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud platforms, enabling scalable AI solutions that grow with your business needs.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Sparkles,
      title: "Innovation Engine",
      description: "Cutting-edge AI research and development that transforms innovative ideas into practical solutions for modern enterprises.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Enterprise Clients" },
    { icon: Target, value: "99.9%", label: "Uptime Guarantee" },
    { icon: TrendingUp, value: "300%", label: "Performance Boost" },
  ];

  const handleContactUs = () => {
    window.location.href = 'mailto:viral@neeyatai.com';
  };

  const handleLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/company/vjaii',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleGetStarted = () => {
    window.open(
      'https://kickload.neeyatai.com/signup',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleKickLoadClick = () => {
    setCurrentView('products');
    setIsProductsDropdownOpen(false);
  };

  if (currentView === 'products') {
    return (
      <div className="min-h-screen text-white relative">
        <BackgroundParticles />
        <ScrollProgress />
        
        {/* Fixed Header/Navigation for KickLoad */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
                <Bot className="h-8 w-8 text-cyan-500 mr-2" />
                <span className="text-xl font-bold text-white">KickLoad</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className="text-white font-semibold flex items-center"
                  >
                    Products
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700">
                      <div className="py-2">
                        <button
                          onClick={handleKickLoadClick}
                          className="w-full text-left px-4 py-2 text-cyan-400 hover:bg-gray-800/50 transition-colors font-semibold"
                        >
                          KickLoad
                        </button>
                        <div className="px-4 py-2 text-gray-500 text-sm">
                          More products coming soon...
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <KickLoadProduct />

        {/* Footer */}
        <footer id="contact" className="bg-[#0a0a2a] text-gray-400 py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
              <div className="animate-fade-in text-center md:text-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center md:justify-start mb-6">
                  <Bot className="h-10 w-10 text-cyan-500 mr-3" />
                  <span className="text-2xl font-bold text-white">Neeyat AI</span>
                </div>
                <div className="flex justify-center md:justify-start space-x-6">
                  <Linkedin 
                    className="hover:text-cyan-400 cursor-pointer transition-colors" 
                    onClick={handleLinkedIn}
                  />
                  <MailSearch 
                    className="hover:text-cyan-400 cursor-pointer transition-colors" 
                    onClick={handleContactUs}
                  />
                </div>
              </div>
              <div className="animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-white font-semibold mb-6">Products</h3>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => setCurrentView('products')}
                      className="hover:text-white transition-colors"
                    >
                      KickLoad
                    </button>
                  </li>
                </ul>
              </div>
              <div className="animate-fade-in text-center" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-white font-semibold mb-6">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="mailto:viral@neeyatai.com" 
                      className="hover:text-white transition-colors"
                    >
                      viral@neeyatai.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-gray-700 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              © 2025 Neeyat AI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative">
      {/* Background animation spans the entire viewport */}
      <BackgroundParticles />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Fixed Header/Navigation for Homepage */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <Bot className="h-8 w-8 text-cyan-500 mr-2" />
              <span className="text-xl font-bold text-white">Neeyat AI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className="text-white font-semibold"
              >
                Home
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700">
                    <div className="py-2">
                      <button
                        onClick={handleKickLoadClick}
                        className="w-full text-left px-4 py-2 text-cyan-400 hover:bg-gray-800/50 transition-colors font-semibold"
                      >
                        KickLoad
                      </button>
                      <div className="px-4 py-2 text-gray-500 text-sm">
                        More products coming soon...
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Content with proper padding to account for fixed header */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
              <div className="text-center">
                <h1
                  className="text-6xl font-extrabold text-white mb-8 glow-text-subtle"
                  style={{ animationDelay: '0.2s' }}>
                  The Future of AI Agents
                </h1>
                <h2
                  className="text-7xl font-extrabold text-white mb-6 glow-text-strong"
                  style={{ animationDelay: '0.2s' }}>
                  Neeyat AI
                </h2>
                <p
                  className="text-2xl text-cyan-200 mb-8 animate-typewriter"
                  style={{ animationDelay: '0.4s' }}
                >
                  Revolutionizing remote work through intelligent automation and innovation
                </p>
                <div className="flex justify-center">
                  <button
                    className="bg-transparent border-2 border-cyan-500 text-cyan-500 px-12 py-5 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 inline-flex items-center"
                    onClick={() => setCurrentView('products')}
                  >
                    View Products
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" style={{ 
                background: 'linear-gradient(to bottom, #833ab4, #fd1d1d, #fcb045)',
                position: 'relative'
              }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-cyan-300 text-center mb-16 animate-fade-in">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard {...service} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#1a1a3a] to-[#2a1a5a] text-white py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-300">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-900/70 backdrop-blur-md rounded-2xl hover:scale-110 transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2 text-cyan-300">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#0a0a2a] text-white py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-5xl font-bold text-cyan-300 mb-8">Innovation Through AI</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Neeyat AI, we're pioneering the next generation of artificial intelligence solutions that transform how teams collaborate, innovate, and succeed in the digital age.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our flagship product, KickLoad, revolutionizes performance testing by automating complex workflows, generating intelligent test plans, and delivering deep analytical insights — all in real time.
                </p>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 inline-flex items-center"
                  onClick={() => setCurrentView('products')}
                >
                  Explore KickLoad
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Innovation"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1a1a3a] to-[#2a1a5a] text-white py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-5xl font-bold text-cyan-300 mb-12 animate-fade-in">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of teams already using Neeyat AI to streamline their operations, enhance productivity, and drive innovation through intelligent automation.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl animate-gradient-sweep hover:scale-110 transition-all duration-300 inline-flex items-center"
                onClick={handleGetStarted}
              >
                Start Free Trial
                <Rocket className="ml-3 h-6 w-6" />
              </button>
              <button
                className="bg-transparent border-2 border-cyan-500 text-cyan-500 px-10 py-5 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                onClick={handleContactUs}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="bg-[#0a0a2a] text-gray-400 py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="animate-fade-in col-span-1 md:col-span-2" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <Bot className="h-10 w-10 text-cyan-500 mr-3" />
                  <span className="text-2xl font-bold text-white">Neeyat AI</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Empowering the future of work through intelligent AI agents that automate, optimize, and innovate across every aspect of your business operations.
                </p>
                <div className="flex space-x-6">
                  <Linkedin 
                    className="hover:text-cyan-400 cursor-pointer transition-colors" 
                    onClick={handleLinkedIn}
                  />
                  <MailSearch 
                    className="hover:text-cyan-400 cursor-pointer transition-colors" 
                    onClick={handleContactUs}
                  />
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-white font-semibold mb-6">Products</h3>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => setCurrentView('products')}
                      className="hover:text-white transition-colors"
                    >
                      KickLoad
                    </button>
                  </li>
                  <li><a href="#services" className="hover:text-white transition-colors">AI Agents</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">DevOps Solutions</a></li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-white font-semibold mb-6">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="mailto:viral@neeyatai.com" 
                      className="hover:text-white transition-colors"
                    >
                      viral@neeyatai.com
                    </a>
                  </li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-gray-700 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              © 2025 Neeyat AI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;