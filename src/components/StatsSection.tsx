"use client";

import { useEffect, useState } from "react";

interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  backgroundColor?: string;
}

const defaultStats: Stat[] = [
  {
    number: "95%",
    label: "Client Satisfaction Rate"
  },
  {
    number: "50+",
    label: "AI Solutions Delivered"
  },
  {
    number: "85%",
    label: "Efficiency Improvement"
  }
];

export default function StatsSection({
  stats = defaultStats,
  backgroundColor = "bg-navy-primary"
}: StatsSectionProps) {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCountersVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${backgroundColor} py-20`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`fade-in ${countersVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-number text-cyan-primary mb-4">
                {stat.number}
              </div>
              <p className="text-white/80 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
