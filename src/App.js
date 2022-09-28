import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 793, //to center it (minus(cursorsize/2))
      y: mousePos.y - 374,
    },
  };

  return (
    <div className="noise-background">
      <div className="text">
        <h1>CUSTOM CURSOR</h1>
      </div>
      <motion.div className="cursor" variants={variants} animate="default" />
    </div>
  );
}

export default App;
