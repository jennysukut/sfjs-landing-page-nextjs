import React from "react";

interface GridProps {
  children: React.ReactNode;
}

const ResponsiveGrid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default ResponsiveGrid;
