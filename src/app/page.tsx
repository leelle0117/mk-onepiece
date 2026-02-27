"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WaveBackground from "@/components/WaveBackground";
import { characters } from "@/data/characters";

// 다이아몬드(◇) 형태로 배치
const floatingPositions: {
  top: number; left: number; size: number; opacity: number; dur: number; yRange: number;
}[] = [
  // 꼭대기 (1개) — 루피: 중앙 왼쪽으로 이동
  { top: 45, left: 5,  size: 80, opacity: 0.42, dur: 5.2, yRange: 14 },
  // 위쪽 (2개)
  { top: 15, left: 30, size: 74, opacity: 0.38, dur: 5.3, yRange: 14 },
  { top: 15, left: 60, size: 78, opacity: 0.40, dur: 4.7, yRange: 12 },
  // 중상 (2개)
  { top: 30, left: 18, size: 72, opacity: 0.36, dur: 5.6, yRange: 16 },
  { top: 30, left: 72, size: 76, opacity: 0.38, dur: 4.9, yRange: 10 },
  // 중앙 가장 넓은 부분 (2개) — 쵸파: 꼭대기로 이동
  { top: 2,  left: 45, size: 76, opacity: 0.40, dur: 5.0, yRange: 12 },
  { top: 45, left: 85, size: 74, opacity: 0.38, dur: 4.5, yRange: 12 },
  // 중하 (2개)
  { top: 60, left: 18, size: 76, opacity: 0.40, dur: 5.5, yRange: 16 },
  { top: 60, left: 72, size: 72, opacity: 0.36, dur: 4.8, yRange: 10 },
  // 아래쪽 (2개)
  { top: 75, left: 30, size: 78, opacity: 0.40, dur: 5.1, yRange: 14 },
  { top: 75, left: 60, size: 74, opacity: 0.38, dur: 4.6, yRange: 12 },
  // 바닥 (1개)
  { top: 88, left: 45, size: 76, opacity: 0.40, dur: 5.4, yRange: 12 },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <WaveBackground />

      {/* 떠다니는 캐릭터 이미지 */}
      {characters.map((char, i) => {
        const pos = floatingPositions[i];
        return (
          <motion.div
            key={char.id}
            className="absolute pointer-events-none select-none rounded-full overflow-hidden"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
              boxShadow: `0 0 20px ${char.color}35`,
              border: `2px solid ${char.color}40`,
            }}
            animate={{
              y: [0, -pos.yRange, 0],
              x: [0, i % 2 === 0 ? 6 : -6, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: pos.dur,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}

      {/* 메인 콘텐츠 */}
      <motion.div
        className="relative z-10 text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 고잉메리호 이미지 */}
        <motion.div
          className="mb-6 flex justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.namu.wiki/i/PflMnsnb6ieexU7KaVeT1HBqlwIKBosk_r3POrMa0n8lOYl1k5sltdPfsQza--gH580OHswF086k6a0EVCNME0OX1IPj9SmMR7N8MEJ9tcw-Z6ct3Q5wPxpW4d4CMmrte4fR08dFPWudn-YcRVPibA.webp"
            alt="고잉메리호"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          />
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-title)] text-4xl md:text-6xl text-gold-gradient mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          나의 원피스
          <br />
          캐릭터 찾기
        </motion.h1>

        <motion.p
          className="text-slate-400 text-lg md:text-xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          12가지 질문으로 알아보는
        </motion.p>

        <motion.p
          className="text-slate-300 text-xl md:text-2xl mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          나와 닮은 원피스 캐릭터는?
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Link href="/quiz">
            <motion.button
              className="relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl md:text-2xl font-[family-name:var(--font-title)] rounded-2xl shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              모험을 시작하자!
              <motion.span
                className="absolute -top-2 -right-2 text-2xl"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ⚡
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* 부가 정보 */}
        <motion.p
          className="mt-8 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          소요 시간: 약 2분
        </motion.p>
      </motion.div>
    </main>
  );
}
