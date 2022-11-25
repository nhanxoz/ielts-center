import { useState, useEffect } from "react";
import bg404 from "../../Assets/loi-404.png";
import { motion } from "framer-motion";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Page404() {
  const { height, width } = useWindowDimensions();
  return (
    <motion.div
      style={{
        height: height,
        position: "relative",
        width: width,
      }}
      initial={{ opacity: 0, minHeight: 800 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <img
        style={{
          width: "60%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src={bg404}
      />
      <a
        className="btn btn-primary"
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          textDecorationLine: "none",
          color: "#fff",
          fontWeight: "bold",
          opacity: 0.8,
          backgroundColor: "#1a75ff",
        }}
        href="/"
      >
        Trang không tồn tại! Trở lại trang chủ
      </a>
    </motion.div>
  );
}
