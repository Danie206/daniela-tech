import { useState } from 'react';
import { Sparkles, Code, Zap, Heart, ArrowRight, Menu, X, ExternalLink, Workflow, DollarSign, MessageSquare, BarChart3, Calendar, Repeat, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Modern Ecommerce',
      category: 'Ecommerce',
      image: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Creative Agency',
      category: 'Creative',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Business Consulting',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Fashion Portfolio',
      category: 'Creative',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Tech Startup',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Online Store',
      category: 'Ecommerce',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Conversion-Focused', 'Fast'],
      liveUrl: '#'
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: 'Daniela completely transformed our brand online. The attention to detail and strategic thinking was exceptional.',
      author: 'Sarah Johnson',
      role: 'CEO, TechVision'
    },
    {
      id: 2,
      text: 'Our site finally matches our vision — clean, modern, and professional. Conversions are up 45%!',
      author: 'Michael Chen',
      role: 'Founder, GrowthLabs'
    },
    {
      id: 3,
      text: 'Working with Daniela Tech was seamless. Fast turnaround, beautiful design, and ongoing support.',
      author: 'Emma Rodriguez',
      role: 'Marketing Director, Bloom Co'
    }
  ];

  const agencies = [
    {
      id: 1,
      name: 'Pilot Wizard',
      logo: '/pilotwizard.png',
      url: 'https://yohdev.com',
      description: 'Worked on full website builds using Elementor, HTML, and the Hustenburg Block Editor in an agile environment with large project loads and fast-paced delivery.'
    },
    {
      id: 2,
      name: 'EyeCandy Creative',
      logo: '/eyecandy.png',
      url: 'https://eyecandycreative.net/',
      description: 'Built WordPress pages with Elementor, ACF fields, and HubSpot integrations with a strong focus on design creativity and visual precision.'
    },
    {
      id: 3,
      name: 'Gig Strategic',
      logo: '/gigstrategic.png',
      url: 'https://gigstrategic.com',
      description: 'Developed and optimized complex WordPress sites, focusing on debugging, SEO formatting, and plugin functionality.'
    },
    {
      id: 4,
      name: 'Flying V Group',
      logo: '/flyingvgroup.png',
      url: 'https://flyingvgroup.com',
      description: 'Supported high-traffic client sites through WordPress edits and Figma-based design updates for enterprise projects.'
    },
    {
      id: 5,
      name: 'Beholder Marketing',
      logo: '/beholderagency.png',
      url: 'https://www.beholdermarketing.com/',
      description: 'Developed conversion-focused websites, wrote SEO-optimized blogs, and crafted marketing copy for client campaigns.'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const nextAgency = () => {
    setCurrentAgencyIndex((prev) => (prev + 1) % agencies.length);
  };

  const prevAgency = () => {
    setCurrentAgencyIndex((prev) => (prev - 1 + agencies.length) % agencies.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-radial-pink pointer-events-none opacity-30"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              Daniela Tech
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-700 hover:text-pink-500 transition-colors">Work</a>
            <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:shadow-glow-pink transition-all duration-300">
              Start Your Project
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 space-y-4">
            <a href="#work" className="block text-gray-700 hover:text-pink-500">Work</a>
            <a href="#services" className="block text-gray-700 hover:text-pink-500">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-pink-500">About</a>
            <a href="#contact" className="block px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-center">
              Start Your Project
            </a>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
          <div className="floating-particle particle-4"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium">
            ✦ Premium Web Development
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 bg-clip-text text-transparent">
              Websites that look stunning
            </span>
            <br />
            <span className="text-gray-900">and get real results.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            I design and develop modern websites that connect, inspire, and convert —
            crafted with strategy, creativity, and code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#work"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-medium hover:shadow-glow-pink transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-pink-300 text-pink-600 rounded-full font-medium hover:bg-pink-50 hover:shadow-glow-pink-soft transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>

          <div className="mt-20 glass-card p-8 rounded-3xl">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 animate-pulse-slow"></div>
              <img
                src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern workspace"
                className="w-full h-full object-cover mix-blend-overlay opacity-40"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-32 px-6 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">Quality and versatility in every build</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['All', 'Business', 'Ecommerce', 'Creative'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-glow-pink'
                    : 'bg-white border border-pink-200 text-gray-700 hover:border-pink-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow-pink transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-white/90 text-gray-800 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.category}</p>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              More than design — I build{' '}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                experiences that convert
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Design & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Every pixel and layout choice is intentional — built around your audience and goals.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
              <p className="text-gray-600 leading-relaxed">
                I turn ideas into fast, functional websites using modern frameworks and no-code tools like Bolt.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Support & Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                From launch to growth — I help your site stay fresh, optimized, and ready to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Connected Systems.{' '}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Effortless Operations.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Your website shouldn't stop at a contact form — it should run your business behind the scenes.
              From lead capture to client follow-up, everything connects automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Repeat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">n8n Automations</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Custom workflows that connect your site to CRMs, emails, and apps you already use.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Zapier</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Instant triggers that move data between tools without you lifting a finger.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">CRM Integration</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Automatically store leads, schedule follow-ups, and track client journeys.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">AI Chat & Email Replies</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Smart automations that answer inquiries, qualify leads, and nurture clients 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Payment & Booking Systems</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fully integrated Stripe, Calendly, or client portals — built directly into your site.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-glow-pink transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Analytics & Growth Tracking</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Real-time performance dashboards that show what's working and where to improve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-xl text-gray-700 font-medium">
              "Your website isn't just online — it's working while you sleep."
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Why Choose <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Daniela Tech</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed animate-fade-in-up">
            I don't just create websites — I create digital experiences that help brands stand out.
            My focus is clean design, strategic UX, and results that speak for themselves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-xl animate-fade-in-up">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold mb-2">Conversion-Driven Design</h3>
              <p className="text-sm text-gray-600">Every element serves a purpose</p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast & Responsive Builds</h3>
              <p className="text-sm text-gray-600">Optimized for all devices</p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl mb-3">💗</div>
              <h3 className="font-bold mb-2">Tailored for Your Brand</h3>
              <p className="text-sm text-gray-600">Unique solutions, not templates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 font-semibold text-sm">AGENCIES I'VE WORKED WITH</span>
              <Sparkles className="w-4 h-4 text-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Leading Agencies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencies.map((agency, index) => {
              const isEven = index % 2 === 0;
              const rotateClass = isEven ? 'group-hover:rotate-1' : 'group-hover:-rotate-1';
              return (
                <a
                  key={agency.id}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass-card rounded-2xl overflow-hidden hover:shadow-glow-pink transition-all duration-500 animate-fade-in-up ${rotateClass} block`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={agency.logo}
                        alt={agency.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {agency.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-white via-purple-50/20 to-pink-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-pink-200 rounded-full mb-4 shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 font-semibold text-sm">TESTIMONIALS</span>
              <Heart className="w-4 h-4 text-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Love</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card p-8 rounded-2xl hover:shadow-glow-pink transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-pink-500 mb-4 text-3xl">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-pink-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-16 rounded-3xl animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                unforgettable.
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you're a brand, entrepreneur, or creator — your website should reflect your best.
              Let's make that happen.
            </p>
            <a
              href="mailto:hello@danielatech.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg rounded-full font-medium hover:shadow-glow-pink transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Daniela Tech
              </span>
            </div>

            <div className="flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
              <a href="#work" className="text-gray-600 hover:text-pink-500 transition-colors">Work</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors">
                <span className="text-sm font-bold">YT</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors">
                <span className="text-sm font-bold">IG</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-pink-100">
            <p className="text-gray-600">
              Built with passion by Daniela Tech ✦
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
