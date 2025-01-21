import React, { useRef, useEffect, useState } from "react";

interface ScrollingBackgroundProps {
  speed?: number; // pixels per second
  children?: React.ReactNode;
  pauseOnHover?: boolean;
}

const ScrollingBackground: React.FC<ScrollingBackgroundProps> = ({
  speed = 20, // Reduced default speed
  children,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollPosition, setAutoScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clone the content for seamless looping
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && !isDragging) {
        setAutoScrollPosition((prev) => {
          const newPosition = prev - (speed * delta) / 1000;
          // Reset position when first content block is fully scrolled
          return newPosition <= -content.offsetWidth ? 0 : newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed, isPaused, isDragging]);

  // Touch and mouse event handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(autoScrollPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    setAutoScrollPosition(scrollLeft + walk);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${autoScrollPosition}px)`;
    }
  }, [autoScrollPosition]);

  return (
    <div
      className="w-full select-none overflow-hidden bg-gray-100"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap transition-transform duration-100 ease-out"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          ref={contentRef}
          className="flex h-64 items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/800/256')",
            minWidth: "100%",
          }}
        >
          <div className="px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Example usage component with more content for better demonstration
const ExampleScroller = () => {
  return (
    <div className="mx-auto w-full max-w-4xl p-4">
      <ScrollingBackground speed={20} pauseOnHover={true}>
        <div className="flex gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold">Item {num}</h3>
              <p className="text-gray-700">Scrolling content here</p>
            </div>
          ))}
        </div>
      </ScrollingBackground>
    </div>
  );
};

export default ExampleScroller;
