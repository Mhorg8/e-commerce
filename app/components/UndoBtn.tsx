"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { LuUndo2 } from "react-icons/lu";

const UndoBtn = () => {
  const router = useRouter();

  return (
    <motion.button
      initial={{ x: 200, y: 0, scale: 1 }}
      animate={{ x: 0, y: 0, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2, delay: 0.4 }}
      className="undoButton z-20"
      onClick={() => router.back()}>
      <LuUndo2 />
    </motion.button>
  );
};

export default UndoBtn;
