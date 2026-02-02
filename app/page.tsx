'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ServiceGallery from '@/components/ServiceGallery';
import AnimatedStats from '@/components/AnimatedStats';
import Testimonials from '@/components/Testimonials';
import { ArrowRight, Smartphone, Zap, Shield, Clock, Award, CheckCircle, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Same-day repairs for most issues',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Guaranteed Quality',
      description: '30-day warranty on all repairs',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified technicians on staff',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Always Open',
      description: '24/7 customer support available',
    },
  ];

  const quickLinks = [
    { icon: <Smartphone className="w-8 h-8" />, label: 'All Devices', href: '/services' },
    { icon: <Wrench className="w-8 h-8" />, label: 'Quick Repairs', href: '/services' },
    { icon: <CheckCircle className="w-8 h-8" />, label: 'Warranty Info', href: '/about' },
  ];

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section - Modern Glassmorphism */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-white via-blue-50 to-green-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-block">
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Fast & Reliable Repair Service
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Your Device,</span>
                <br />
                <span className="text-foreground">Our Care</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional mobile repair services for iPhone, iPad, and Android devices. We deliver quality repairs with lightning-fast turnaround times and expert technicians.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Book Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="glass text-primary px-8 py-4 rounded-xl font-semibold hover:bg-secondary/50 transition-all duration-300 border border-primary/30"
                >
                  Learn More
                </Link>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{feature.icon}</div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className={`relative h-96 lg:h-full flex items-center justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="glass p-8 rounded-3xl border border-primary/30 animate-float">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
                  <Smartphone className="w-32 h-32 text-primary mx-auto animate-pulse" />
                  <p className="text-muted-foreground mt-4 font-semibold">Expert Device Repair</p>
                </div>
              </div>
              <div className="absolute w-40 h-40 bg-primary/5 rounded-full blur-2xl -top-10 -right-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="glass p-6 rounded-xl hover:border-primary transition-all group flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary group-hover:scale-110 transition-transform">{link.icon}</div>
                <span className="font-semibold group-hover:text-primary transition-colors">{link.label}</span>
                <ArrowRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Trusted By Thousands
            </h2>
            <p className="text-lg text-muted-foreground">Our proven track record of excellence</p>
          </div>
          <AnimatedStats />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Quality Work In Action
            </h2>
            <p className="text-lg text-muted-foreground">Professional repair services showcase</p>
          </div>
          <ServiceGallery />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions for all your device needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Screen Replacement', icon: '🖥️', desc: 'Professional display repairs' },
              { title: 'Battery Service', icon: '🔋', desc: 'Quick battery replacement' },
              { title: 'Water Damage', icon: '💧', desc: 'Advanced recovery services' },
              { title: 'Charging Port', icon: '⚡', desc: 'Port repair & replacement' },
              { title: 'Software Support', icon: '📱', desc: 'iOS & Android help' },
              { title: 'Device Upgrade', icon: '🎁', desc: 'Trade-in assistance' },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-blue-100 bg-blue-50 hover:border-primary hover:shadow-lg transition-all group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/services"
                    className="text-primary font-semibold text-sm flex items-center gap-2 group/link"
                  >
                    Learn more
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link
              href="/services"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-300/50 transform hover:scale-105 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">Real testimonials from satisfied clients</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book your appointment today and experience professional care. We're here to help 24/7.
          </p>

          <Link
            href="/services"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
          >
            Book Service Now
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Apple Care</h3>
              <p className="text-muted-foreground text-sm">
                Your trusted mobile repair partner
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="/admin" className="hover:text-primary transition-colors">
                    Admin Portal
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@applecare.com" className="hover:text-primary transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">
                Phone: (555) 123-4567
                <br />
                Email: support@applecare.com
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Apple Care. All rights reserved. Your Device Our Care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
