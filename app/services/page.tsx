'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';
import {
  Zap,
  Shield,
  Clock,
  Award,
  Cpu,
  Battery,
  Monitor,
  Wifi,
} from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesList = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Screen Replacement',
      description: 'Professional display repairs for all device types with OEM-quality screens',
      price: '$79-$299',
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Battery Replacement',
      description: 'Quick battery service with genuine components and warranty',
      price: '$49-$129',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Charging Port Repair',
      description: 'Fast charging port diagnostics and replacement',
      price: '$39-$99',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Water Damage Recovery',
      description: 'Advanced cleaning and restoration for water-damaged devices',
      price: '$99-$299',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Software Support',
      description: 'iOS and Android troubleshooting and optimization',
      price: '$29-$79',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Device Upgrade',
      description: 'Trade-in and upgrade assistance for new devices',
      price: 'Call for quote',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`space-y-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile repair solutions for all your devices
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-primary group-hover:text-accent transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Why Choose Apple Care?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Fast Service',
                desc: 'Same-day repairs available for most issues',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: '30-Day Warranty',
                desc: 'Complete peace of mind on all repairs',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Expert Technicians',
                desc: 'Certified professionals with years of experience',
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: '24/7 Support',
                desc: 'Always available for your device needs',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Apple Care</h3>
              <p className="text-muted-foreground">
                Your trusted mobile repair service provider
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground">
                Phone: (555) 123-4567
                <br />
                Email: support@applecare.com
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Apple Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
