// import FallingImages from "./FallingImages";
import Menu from "./Menu";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "linear",
      }}
      className="border-b border-[#4646458a]"
    >
      <div className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 w-6/12 max-w-6xl justify-between mx-auto mt-3 text-[#ad8a1f] rounded-xl bg-[#38A3A5]">
        <Menu />
      </div>
      {/* <FallingImages /> */}
    </motion.div>
  );
}
