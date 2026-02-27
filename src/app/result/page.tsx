"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { findMatchingCharacter } from "@/lib/matching";
import ResultCard from "@/components/ResultCard";
import WaveBackground from "@/components/WaveBackground";

type Profile = [number, number, number, number, number, number];

function ResultContent() {
  const searchParams = useSearchParams();

  const { character, similarity, userProfile } = useMemo(() => {
    try {
      const scoresParam = searchParams.get("scores");
      if (!scoresParam) throw new Error("No scores");
      const parsed = JSON.parse(decodeURIComponent(scoresParam)) as Profile;
      const result = findMatchingCharacter(parsed);
      return { ...result, userProfile: parsed };
    } catch {
      // 기본값: 루피로 fallback
      const defaultProfile: Profile = [2, -1, 1, 1, -1, 1];
      const result = findMatchingCharacter(defaultProfile);
      return { ...result, userProfile: defaultProfile };
    }
  }, [searchParams]);

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-8 overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 w-full max-w-lg">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.p
            className="text-gold-500 text-sm font-bold tracking-widest mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            당신의 원피스 캐릭터는...
          </motion.p>
        </motion.div>

        {/* 결과 카드 */}
        <ResultCard
          character={character}
          similarity={similarity}
          userProfile={userProfile}
        />

        {/* 액션 버튼들 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/quiz" className="flex-1">
            <motion.button
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              다시 하기
            </motion.button>
          </Link>
          <motion.button
            className="flex-1 px-6 py-3 bg-ocean-700/50 border border-ocean-600/50 text-slate-300 font-bold rounded-xl cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={async () => {
              const text = `나와 가장 닮은 원피스 캐릭터는 ${character.name}! (싱크로율 ${similarity}%) ${character.emoji}`;
              if (navigator.share) {
                navigator.share({ title: "나의 원피스 캐릭터", text });
              } else if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                alert("결과가 클립보드에 복사되었어요!");
              } else {
                // clipboard API 미지원 환경 (HTTP 등) fallback
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                alert("결과가 클립보드에 복사되었어요!");
              }
            }}
          >
            공유하기
          </motion.button>
        </motion.div>

        {/* 홈으로 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-400 transition-colors"
          >
            처음으로 돌아가기
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            className="text-6xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            👒
          </motion.div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
