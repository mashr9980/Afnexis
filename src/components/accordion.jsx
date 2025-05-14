"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AccordionItem = ({ title, children, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-[rgba(255,255,255,0.1)]">
      <button
        className={`flex justify-between items-center w-full py-5 text-left focus:outline-none ${
          isOpen
            ? "text-[var(--primary-accent)]"
            : "text-[var(--headings-text)]"
        }`}
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[var(--primary-accent)] shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[var(--body-text)] shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[var(--body-text)]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          toggleAccordion={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
