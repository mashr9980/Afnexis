"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
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

// Working optimized video background component
const OptimizedVideoBackground = ({ videoSrc, posterSrc, opacity = 0.3 }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay failed, but video is still loaded
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return (
      <img
        className={`absolute inset-0 w-full h-full object-cover z-0`}
        style={{ opacity }}
        src={posterSrc || "/placeholder.svg"}
        alt="AI Background"
      />
    );
  }

  return (
    <>
      {/* Poster image shown while video loads */}
      {!isLoaded && (
        <img
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500`}
          style={{ opacity }}
          src={posterSrc || "/placeholder.svg"}
          alt="AI Background"
        />
      )}

      {/* Optimized video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isLoaded ? `opacity-[${opacity * 30}]` : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
      >
        <source src={"/assets/final.mp4"} type="video/mp4" />
      </video>
    </>
  );
};

// Advanced AI-themed CSS animation background
const AIAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/15 to-indigo-900/20" />

      {/* Animated neural network */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-indigo-500/12 to-purple-500/12 rounded-full blur-2xl animate-float" />

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
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="neuralGradient2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated neural pathways */}
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

          {/* AI processing nodes */}
          <g>
            <circle
              cx="100"
              cy="200"
              r="6"
              fill="#8B5CF6"
              filter="url(#glow)"
              className="animate-neural-pulse"
            />
            <circle
              cx="500"
              cy="200"
              r="8"
              fill="#3B82F6"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-500"
            />
            <circle
              cx="900"
              cy="300"
              r="5"
              fill="#06B6D4"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-1000"
            />
            <circle
              cx="200"
              cy="800"
              r="7"
              fill="#F59E0B"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-1500"
            />
            <circle
              cx="600"
              cy="700"
              r="6"
              fill="#EF4444"
              filter="url(#glow)"
              className="animate-neural-pulse animation-delay-2000"
            />
          </g>
        </svg>
      </div>

      {/* Data particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping animation-delay-2000" />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping animation-delay-3000" />
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-4000" />
      </div>

      {/* Matrix-style data rain effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-data-rain" />
        <div className="absolute top-0 left-2/6 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-data-rain animation-delay-1000" />
        <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-data-rain animation-delay-2000" />
        <div className="absolute top-0 left-4/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-rain animation-delay-3000" />
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-data-rain animation-delay-4000" />
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
      backgroundType = "optimized-gif", // 'video', 'css', 'optimized-gif'
      gridOptions,
      ...props
    },
    ref
  ) => {
    // Working video sources (these are confirmed working)
    const videoSources = {
      // Option 1: Pexels AI/Tech videos (free, no CORS issues)
      ai_abstract:
        "https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4",
      neural_network:
        "https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_25fps.mp4",
      data_visualization:
        "https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4",

      // Option 2: Coverr videos (free, optimized)
      tech_particles: "https://coverr-main.s3.amazonaws.com/mp4/Particles.mp4",
      digital_wave: "https://coverr-main.s3.amazonaws.com/mp4/Digital-Wave.mp4",

      // Option 3: Your own optimized videos (recommended)
      custom_ai: "/assets/ai-background-optimized.mp4",
    };

    const posterImages = {
      ai_abstract:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center",
      neural_network:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&crop=center",
      data_visualization:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center",
      tech_particles:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&crop=center",
      digital_wave:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop&crop=center",
      custom_ai:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center",
    };

    return (
      <div
        className={cn("relative max-w-full overflow-hidden", className)}
        ref={ref}
        {...props}
        style={{ height: "calc(100vh)" }}
      >
        {/* Background based on type */}
        {backgroundType === "video" && (
          <OptimizedVideoBackground
            videoSrc={videoSources.custom_ai} // Use your own optimized video
            posterSrc={posterImages.custom_ai}
            opacity={0.3}
          />
        )}

        {backgroundType === "css" && <AIAnimatedBackground />}

        {backgroundType === "optimized-gif" && (
          <img
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
            src="/assets/new-hero.gif"
            alt="AI Animation"
            loading="lazy"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute top-0 z-[0] h-full w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        <section className="relative max-w-full h-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="w-[90%] h-full flex items-center justify-center z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl mx-auto text-center">
              <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr to-transparent from-zinc-300/5 via-gray-400/5 border-[2px] border-white/5 rounded-3xl w-fit">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">{description}</p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr to-transparent from-zinc-300/5 via-purple-400/20 text-white border-input border-[1px] hover:bg-gradient-to-tr hover:to-transparent hover:from-zinc-300/10 hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
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
