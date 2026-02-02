'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'iPhone User',
    content: 'Amazing service! My phone screen was completely shattered and they fixed it same day. Professional and affordable. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Samsung Galaxy Owner',
    content: 'Best repair experience I\'ve had. The technician was very knowledgeable and explained everything. Great communication throughout.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'iPad User',
    content: 'I was nervous about the battery replacement but the team was so professional. Worth every penny and the warranty is peace of mind.',
    rating: 5,
  },
  {
    name: 'David Brown',
    role: 'Multiple Devices',
    content: 'I\'ve used Apple Care for multiple repairs and they never disappoint. Consistently excellent service and fair pricing.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-105"
          style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-foreground">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  );
}
