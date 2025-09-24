import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Timeline({ items }) {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setProgress(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle Google search on image click
  const handleSearch = (query) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div ref={timelineRef} className="relative pl-8 border-l-2 border-gray-700">
      {/* Animated line */}
      <motion.div
        className="absolute left-0 top-0 w-[2px] bg-[#34ebd2]"
        style={{ height: `${progress * 100}%` }}
      />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-16 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Dot on timeline */}
          <div className="absolute -left-4 top-2 w-6 h-6 bg-[#34ebd2] rounded-full shadow-lg" />

          <div className="ml-8 flex flex-col md:flex-row items-start gap-6">
            {/* Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-64 h-40 object-cover rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSearch(item.title)}
            />

            {/* Text */}
            <div>
              <h4 className="text-xl font-bold bebas-neue-regular">{item.year}</h4>
              <p className="text-lg oswald-font">{item.title}</p>
              <motion.p
                className="text-gray-400 oswald-sub"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
              <motion.p
                className="text-[#34ebd2] font-semibold mt-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {item.grade}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
