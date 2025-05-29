"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "#14b8a6",
  darkLineColor = "#0d9488",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t to-transparent to-90% from-black" />
    </div>
  );
};

// Enhanced AI-themed CSS animation background with teal colors
const AIAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient with teal theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-teal-800/15 to-cyan-900/20" />

      {/* Animated neural network */}
      <div className="absolute inset-0">
        {/* Large floating orbs with teal colors */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-teal-400/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-teal-600/12 to-emerald-500/12 rounded-full blur-2xl animate-float" />

        {/* Neural network connections */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient
              id="neuralGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="neuralGradient2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated neural pathways with teal colors */}
          <g className="animate-pulse">
            <path
              d="M100,200 Q300,100 500,200 T900,300"
              stroke="url(#neuralGradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-draw"
            />
            <path
              d="M200,800 Q400,600 600,700 T800,500"
              stroke="url(#neuralGradient2)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-draw animation-delay-1000"
            />
            <path
              d="M50,500 Q250,300 450,400 Q650,500 850,200"
              stroke="url(#neuralGradient1)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              className="animate-draw animation-delay-2000"
            />
          </g>

          {/* AI processing nodes with teal colors */}
          <g>
            <circle
              cx="100"
              cy="200"
              r="6"
              fill="#14b8a6"
              filter="url(#glow)"
              className="animate-neural-pulse"
            />
            <circle
              cx="500"
              cy="200"
              r="8"
              fill="#06b6d4"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-500"
            />
            <circle
              cx="900"
              cy="300"
              r="5"
              fill="#5eead4"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-1000"
            />
            <circle
              cx="200"
              cy="800"
              r="7"
              fill="#0d9488"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-1500"
            />
            <circle
              cx="600"
              cy="700"
              r="6"
              fill="#2dd4bf"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-2000"
            />
          </g>
        </svg>
      </div>

      {/* Data particles with teal colors */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping animation-delay-2000" />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-3000" />
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-teal-500 rounded-full animate-ping animation-delay-4000" />
      </div>

      {/* Matrix-style data rain effect with teal colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-data-rain" />
        <div className="absolute top-0 left-2/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-rain animation-delay-1000" />
        <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-data-rain animation-delay-2000" />
        <div className="absolute top-0 left-4/6 w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-data-rain animation-delay-3000" />
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-transparent via-teal-300 to-transparent animate-data-rain animation-delay-4000" />
      </div>
    </div>
  );
};

const HeroSection = React.forwardRef(
  (
    {
      className,
      title = "AI-Powered Innovation",
      subtitle = {
        regular: "Transform your business with ",
        gradient: "intelligent automation",
      },
      description = "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization with cutting-edge AI solutions.",
      ctaText = "Start Building",
      ctaHref = "/contact#contact-form",
      backgroundType = "css", // Using CSS animations for better teal integration
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("relative max-w-full overflow-hidden", className)}
        ref={ref}
        {...props}
        style={{ height: "calc(100vh)" }}
      >
        {/* Enhanced background with teal theme */}
        <AIAnimatedBackground />

        {/* Enhanced gradient overlay with teal accents */}
        <div className="absolute top-0 z-[0] h-full w-screen bg-teal-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(20,184,166,0.3),rgba(255,255,255,0))]" />

        {/* Additional teal glow effects */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-teal-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-teal-glow"></div>
        </div>

        <section className="relative max-w-full h-full mx-auto z-10">
          <RetroGrid {...gridOptions} />
          <div className="w-[90%] h-full flex items-center justify-center z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl mx-auto text-center">
              <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr to-transparent from-zinc-300/5 via-teal-400/10 border-[2px] border-teal-500/20 rounded-3xl w-fit hover:border-teal-400/30 transition-all duration-300">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">{description}</p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5eead4_0%,#14b8a6_50%,#5eead4_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr to-transparent from-zinc-300/5 via-teal-400/20 text-white border-input border-[1px] hover:bg-gradient-to-tr hover:to-transparent hover:from-zinc-300/10 hover:via-teal-400/30 hover:shadow-lg hover:shadow-teal-500/25 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };