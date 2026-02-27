"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { questions, Answer } from "@/data/questions";
import { aggregateScores } from "@/lib/matching";
import ProgressBar from "@/components/ProgressBar";
import QuizCard from "@/components/QuizCard";
import WaveBackground from "@/components/WaveBackground";

type Profile = [number, number, number, number, number, number];

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Profile[]>([]);
  const [direction, setDirection] = useState(1);

  const handleAnswer = useCallback(
    (answer: Answer) => {
      const newAnswers = [...answers, answer.scores];
      setAnswers(newAnswers);

      if (currentIndex < questions.length - 1) {
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
      } else {
        // 마지막 질문 - 결과 페이지로 이동
        const finalScores = aggregateScores(newAnswers);
        const scoresParam = encodeURIComponent(JSON.stringify(finalScores));
        router.push(`/result?scores=${scoresParam}`);
      }
    },
    [answers, currentIndex, router]
  );

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-8 overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 w-full max-w-xl">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-3xl">👒</span>
        </motion.div>

        {/* 프로그레스 바 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ProgressBar current={currentIndex} total={questions.length} />
        </motion.div>

        {/* 퀴즈 카드 */}
        <QuizCard
          question={questions[currentIndex]}
          questionIndex={currentIndex}
          onAnswer={handleAnswer}
          direction={direction}
        />
      </div>
    </main>
  );
}
