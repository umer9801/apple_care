'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Screen Replacement',
    image: '/screen-repair.jpg',
    description: 'Expert screen repair using genuine parts',
  },
  {
    id: 2,
    title: 'Battery Service',
    image: '/battery-service.jpg',
    description: 'Precision battery replacement and optimization',
  },
  {
    id: 3,
    title: 'Team Expertise',
    image: '/team-working.jpg',
    description: 'Professional technicians providing quality care',
  },
];

export default function ServiceGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-80"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{ animation: `slideInRight 0.6s ease-out ${index * 0.1}s both` }}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-white/90">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
