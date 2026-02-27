"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-400">
          질문 <span className="text-gold-500 font-bold">{current + 1}</span> / {total}
        </span>
        <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 bg-ocean-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full progress-gradient rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
