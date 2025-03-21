"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate stable random positions based on a seed
const generatePositions = (count: number, seed = 1) => {
  // Simple random number generator with seed
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      left: `${seededRandom() * 100}%`,
      top: `${seededRandom() * 100}%`,
      size: Math.max(20, seededRandom() * 40),
      delay: seededRandom() * 0.5
    });
  }
  return positions;
};

// Pre-generate positions with a fixed seed
const floatingElements = generatePositions(20);
const codeElements = generatePositions(30, 32);

const FloatingElements = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div>
        <div>
          <div>
            <div>
              {/* Only animate when on client side */}
              {floatingElements.map((element, index) => (
                <motion.div
                  key={`floating-${index}`}
                  className="absolute text-[#FBE4D6]/40 flex items-center justify-center"
                  style={{
                    left: element.left,
                    top: element.top,
                    width: `${element.size}px`,
                    height: `${element.size}px`
                  }}
                  animate={isClient ? {
                    y: [0, 10, 0],
                    opacity: [0.3, 0.5, 0.3]
                  } : {}}
                  transition={{
                    duration: 3 + element.delay,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <div className="w-full h-full border border-[#FBE4D6]/40 rounded-full"></div>
                </motion.div>
              ))}
              
              {codeElements.map((element, index) => (
                <motion.div
                  key={`code-${index}`}
                  className="absolute text-[#FBE4D6]/40 text-sm font-mono"
                  style={{
                    left: element.left,
                    top: element.top
                  }}
                  animate={isClient ? { y: [0, -15, 0] } : {}}
                  transition={{
                    duration: 5 + element.delay,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  {index % 2 === 0 ? "1" : "0"}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;