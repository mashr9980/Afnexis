"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Layers,
  Award,
  Users,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

const reasons = [
  {
    title: "Scalable Solutions",
    description:
      "Our solutions grow with your business, ensuring long-term value and adaptability.",
    icon: <Layers className="h-8 w-8 text-primary-foreground" />,
  },
  {
    title: "Innovation Focus",
    description:
      "We stay at the cutting edge of technology to deliver forward-thinking solutions.",
    icon: <Zap className="h-8 w-8 text-primary-foreground" />,
  },
  {
    title: "Custom Approach",
    description:
      "Tailored strategies and solutions designed specifically for your unique challenges.",
    icon: <Award className="h-8 w-8 text-primary-foreground" />,
  },
  {
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across multiple industries for informed implementation.",
    icon: <Users className="h-8 w-8 text-primary-foreground" />,
  },
];

const stats = [
  {
    value: 250,
    label: "Projects Delivered",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    value: 10,
    label: "Years of Experience",
    icon: <Clock className="h-6 w-6" />,
  },
  { value: 50, label: "Global Clients", icon: <Globe className="h-6 w-6" /> },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const duration = 2000;
        const startTime = performance.now();
        const endValue = stat.value;

        const updateCount = () => {
          const currentTime = performance.now();
          const progress = Math.min(1, (currentTime - startTime) / duration);
          const currentValue = Math.floor(progress * endValue);

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = currentValue;
            return newCounts;
          });

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        const delay = index * 200;
        const timeoutId = setTimeout(() => {
          requestAnimationFrame(updateCount);
        }, delay);

        return timeoutId;
      });

      return () => {
        timers.forEach((timerId) => clearTimeout(timerId));
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 container-cards">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-headings font-['Poppins'] mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg">
            We deliver exceptional value through our expertise, innovation, and
            commitment to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`bg-foreground card-border rounded-xl p-6 transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(13,148,136,0.3)] delay-${
                index * 100
              }`}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-[#0d1117] rounded-lg">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-text">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className={`text-center transition-all duration-500 transform delay-${
                  index * 200
                } bg-foreground card-border rounded-xl p-8 hover:shadow-[0_0_15px_rgba(13,148,136,0.3)]`}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-primary-foreground font-['Poppins'] mb-2 flex items-center justify-center">
                  <span className="counter-value">{counts[index]}</span>
                  <span className="ml-1">+</span>
                </div>
                <div className="text-text font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
