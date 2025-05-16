"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CaseStudyCard({ study, isEven }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-background border-none rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,195,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className={`relative h-[300px] lg:h-auto ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden"></div>
        </div>

        <div
          className={`p-6 lg:p-8 flex flex-col justify-center ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3 className="text-2xl font-bold text-headings font-['Poppins'] mb-2">
            {study.title}
          </h3>
          <p className="text-primary-foreground text-lg mb-4">
            {study.subtitle}
          </p>
          <p className="text-text mb-6">{study.description}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-headings mb-3">
              Key Results:
            </h4>
            <ul className="space-y-2">
              {study.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-foreground mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-text">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href={study.link} className="mt-auto">
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-background flex items-center gap-2">
              Read Full Case Study <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
