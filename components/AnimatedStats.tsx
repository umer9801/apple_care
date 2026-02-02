'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: 'Happy Customers', value: 5000, suffix: '+' },
  { label: 'Devices Repaired', value: 8000, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

export default function AnimatedStats() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals: NodeJS.Timeout[] = [];

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, 30);

      intervals.push(interval);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible]);

  return (
    <div ref={containerRef} className="grid md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
        >
          <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
            {Math.round(counters[index])}{stat.suffix}
          </div>
          <p className="text-muted-foreground font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
