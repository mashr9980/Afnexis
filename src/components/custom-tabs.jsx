"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CustomTabs({ tabs, defaultValue, className = "" }) {
  const [activeTab, setActiveTab] = useState(
    defaultValue || tabs[0]?.value || ""
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Tab List */}
      <div className="flex flex-wrap mb-8 bg-foreground rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex-1 min-w-[100px] ${
              activeTab === tab.value
                ? "text-[#0d1117] z-10"
                : "text-text hover:text-headings"
            }`}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="active-tab-background"
                className="absolute inset-0 bg-primary-foreground rounded-md"
                initial={false}
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`transition-opacity duration-300 ${
              activeTab === tab.value ? "block" : "hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
