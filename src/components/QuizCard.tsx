"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Question, Answer } from "@/data/questions";

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  onAnswer: (answer: Answer) => void;
  direction: number;
}

export default function QuizCard({
  question,
  questionIndex,
  onAnswer,
  direction,
}: QuizCardProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={questionIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full max-w-xl mx-auto"
      >
        {/* 질문 */}
        <div className="card-glow bg-ocean-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-ocean-700/50">
          <motion.h2
            className="text-xl md:text-2xl font-bold text-center mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {question.question}
          </motion.h2>

          {/* 선택지 */}
          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <motion.button
                key={index}
                className="answer-btn w-full text-left px-5 py-4 bg-ocean-700/50 hover:bg-ocean-700 border border-ocean-600/30 hover:border-gold-500/50 rounded-xl text-base md:text-lg transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(answer)}
              >
                {answer.text}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
