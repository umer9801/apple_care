'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import { Award, Users, Target, Zap, Heart, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Service',
      description: 'Fast repairs without compromising quality',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Expert technicians dedicated to perfection',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Latest tools and techniques in repairs',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Lead Technician',
      desc: '12+ years experience in device repair',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Technician',
      desc: 'Specialized in water damage recovery',
    },
    {
      name: 'Mike Chen',
      role: 'Warranty Manager',
      desc: 'Ensures quality and customer satisfaction',
    },
    {
      name: 'Emily Davis',
      role: 'Customer Support',
      desc: '24/7 support and booking management',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Devices Repaired' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '500+', label: 'Monthly Customers' },
    { number: '15+', label: 'Years Combined Experience' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-green-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`space-y-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              About Apple Care
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing the best mobile repair services with professional expertise and customer care
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide professional, affordable, and reliable mobile device repair services that exceed customer expectations. We believe every device deserves expert care, and every customer deserves exceptional service with integrity and transparency.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-green-50 border border-green-100 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted mobile repair service provider in the region. We envision a future where quality device repair is accessible to everyone, with innovation driving our services forward and customer satisfaction leading our every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">Expert technicians dedicated to your satisfaction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center bg-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose Apple Care?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Expert Technicians',
                items: [
                  'Certified and trained professionals',
                  'Years of combined experience',
                  'Continuous skill development',
                  'Latest industry certifications',
                ],
              },
              {
                title: 'Quality Assurance',
                items: [
                  '30-day warranty on repairs',
                  'Genuine replacement parts',
                  'Rigorous testing procedures',
                  'Transparent pricing',
                ],
              },
              {
                title: 'Customer Service',
                items: [
                  '24/7 support availability',
                  'Fast turnaround times',
                  'Convenient scheduling',
                  'Professional communication',
                ],
              },
              {
                title: 'Advanced Equipment',
                items: [
                  'Latest repair tools',
                  'Diagnostic equipment',
                  'Clean workspace',
                  'Modern facilities',
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 relative bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is ready to help you with any inquiries about our services
          </p>
          <div className="p-8 rounded-2xl inline-block bg-blue-50 border border-blue-100">
            <p className="text-muted-foreground mb-4">Contact us today:</p>
            <p className="text-2xl font-bold text-blue-600 mb-2">(555) 123-4567</p>
            <p className="text-muted-foreground">support@applecare.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Apple Care</h3>
              <p className="text-slate-400 text-sm">
                Your trusted mobile repair partner
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/admin" className="hover:text-white transition-colors">
                    Admin Portal
                  </a>
                </li>
                <li>
                  <a href="mailto:support@applecare.com" className="hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <p className="text-slate-400 text-sm">
                Phone: (555) 123-4567
                <br />
                Email: support@applecare.com
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; 2025 Apple Care. All rights reserved. Your Device Our Care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
