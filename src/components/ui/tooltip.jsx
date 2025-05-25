const Tooltip = ({ content, children, show }) => {
  if (!show) return children;

  return (
    <div className="relative group">
      {children}
      <div className="absolute z-50 bottom-full left-0 mb-2 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl max-w-sm w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="max-h-40 overflow-y-auto text-left leading-relaxed">
          {content}
        </div>
        <div className="absolute top-full left-6 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default Tooltip;
