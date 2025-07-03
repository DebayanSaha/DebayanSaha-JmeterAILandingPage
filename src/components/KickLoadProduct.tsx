import React from 'react';
import {
  PlayCircle,
  Brain,
  Mail,
  Link,
  Monitor,
  Terminal,
  Rocket,
} from 'lucide-react';

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

export function KickLoadProduct() {
  const features = [
    {
      icon: Terminal,
      title: "Automated Test Creation",
      description: "Write prompts and KickLoad will generate test plans automatically",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: PlayCircle,
      title: "Run Tests",
      description: "Select JMX files and KickLoad will execute tests with optimal configurations",
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
      description: "Run KickLoad on desktop or cloud platforms like AWS",
      image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleJoinWaitlist = () => {
    window.open(
      'https://kickload.neeyatai.com/signup',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
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
                AI based Performance Testing
              </h1>
              <h2
                className="text-7xl font-extrabold text-white mb-6 glow-text-strong"
                style={{ animationDelay: '0.2s' }}>
               KickLoad 
              </h2>
              <p
                className="text-2xl text-cyan-200 mb-8 animate-typewriter"
                style={{ animationDelay: '0.4s' }}
              >
                Performance testing made easy with artificial intelligence
              </p>
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-full font-bold text-xl animate-gradient-sweep hover:scale-110 transition-all duration-300 inline-flex items-center"
                style={{ animationDelay: '0.6s' }} 
                onClick={handleJoinWaitlist}
              >
                Try free
                <Rocket className="ml-3 h-6 w-6 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" style={{ 
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
      <div className="bg-gradient-to-r from-[#1a1a3a] to-[#2a1a5a] text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div
              className="p-8 bg-gray-900/70 backdrop-blur-md rounded-2xl hover:scale-110 transition-transform animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="text-5xl font-bold mb-4 text-cyan-300 text-center">Lean 6 Sigma Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a0a2a] text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-5xl font-bold text-cyan-300 mb-12 animate-fade-in">
            Ready to transform your performance testing?
          </h2>
          <div className="flex justify-center gap-6">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl animate-gradient-sweep hover:scale-110 transition-all duration-300 inline-flex items-center"
              onClick={handleJoinWaitlist}
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
    </div>
  );
}