'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';
import {
  CheckCircle,
  Calendar,
  AlertCircle,
} from 'lucide-react';

export default function BookNow() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const deviceTypes = [
    'iPhone 15 Pro',
    'iPhone 15',
    'iPhone 14 Series',
    'iPhone 13 Series',
    'iPad Pro',
    'iPad Air',
    'Samsung Galaxy S24',
    'Samsung Galaxy A Series',
    'Google Pixel',
    'Other Android Device',
  ];

  const issues = [
    'Screen Damage',
    'Battery Issue',
    'Water Damage',
    'Software Problem',
    'Camera Issue',
    'Button Damage',
    'Speaker/Mic Problem',
    'Charging Port Issue',
    'Device Won\'t Turn On',
    'Other Issue',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Sanitize and validate name (prevent XSS)
    const sanitizedName = formData.name.trim().replace(/<[^>]*>/g, '');
    if (!sanitizedName || sanitizedName.length < 2 || sanitizedName.length > 50) {
      newErrors.name = 'Name must be 2-50 characters and contain no HTML';
    }

    // Validate email with more robust regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Valid email is required';
    }

    // Validate phone number (more strict)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
    if (!formData.issue) newErrors.issue = 'Issue description is required';
    
    // Validate date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!formData.date || selectedDate < today) {
      newErrors.date = 'Please select a future date';
    }
    
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          deviceType: '',
          issue: '',
          date: '',
          time: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Sanitize input to prevent XSS
    let sanitizedValue = value;
    if (name === 'name') {
      sanitizedValue = value.replace(/<[^>]*>/g, '').substring(0, 50);
    } else if (name === 'phone') {
      sanitizedValue = value.replace(/[^0-9]/g, '').substring(0, 10);
    } else if (name === 'email') {
      sanitizedValue = value.substring(0, 100);
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

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
              Book Your Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule your repair appointment in just a few steps
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-blue-200 bg-blue-50">
            {submitted ? (
              <div className="flex items-center justify-center gap-4 py-12 animate-fade-in-up">
                <CheckCircle className="w-16 h-16 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Booking Confirmed!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll contact you shortly to confirm the appointment details.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.name
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground placeholder-muted-foreground`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.email
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground placeholder-muted-foreground`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Device Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.phone
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground placeholder-muted-foreground`}
                      placeholder="1234567890"
                    />
                    {errors.phone && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Device Type *
                    </label>
                    <select
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.deviceType
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground`}
                    >
                      <option value="">Select a device</option>
                      {deviceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.deviceType && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.deviceType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Issue */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Issue *
                  </label>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                      errors.issue
                        ? 'border-accent'
                        : 'border-border hover:border-primary'
                    } text-foreground`}
                  >
                    <option value="">Select the issue</option>
                    {issues.map((issue) => (
                      <option key={issue} value={issue}>
                        {issue}
                      </option>
                    ))}
                  </select>
                  {errors.issue && (
                    <p className="text-accent text-sm mt-1 flex items-center gap-2">
                      <AlertCircle size={16} />
                      {errors.issue}
                    </p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.date
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground`}
                    />
                    {errors.date && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.date}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-all ${
                        errors.time
                          ? 'border-accent'
                          : 'border-border hover:border-primary'
                      } text-foreground`}
                    >
                      <option value="">Select a time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                    {errors.time && (
                      <p className="text-accent text-sm mt-1 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Calendar size={20} />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Confirm Booking
                  </span>
                </button>
              </form>
            )}
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
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Services
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