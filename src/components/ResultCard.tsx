"use client";

import { motion } from "framer-motion";
import { Character } from "@/data/characters";

interface ResultCardProps {
  character: Character;
  similarity: number;
  userProfile: [number, number, number, number, number, number];
}

const dimensionLabels = ["모험", "논리", "리더", "외향", "정의", "행동"];

function RadarChart({
  profile,
  color,
}: {
  profile: number[];
  color: string;
}) {
  const size = 180;
  const center = size / 2;
  const radius = size / 2 - 20;
  const angles = dimensionLabels.map(
    (_, i) => (Math.PI * 2 * i) / dimensionLabels.length - Math.PI / 2
  );

  // 정규화: -2~+2 → 0~1
  const normalizedProfile = profile.map((v) => (v + 2) / 4);

  const points = normalizedProfile
    .map((v, i) => {
      const r = radius * Math.max(v, 0.1);
      const x = center + r * Math.cos(angles[i]);
      const y = center + r * Math.sin(angles[i]);
      return `${x},${y}`;
    })
    .join(" ");

  // 격자선
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* 격자 */}
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={angles
            .map((a) => {
              const r = radius * level;
              return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`;
            })
            .join(" ")}
          fill="none"
          stroke="rgba(148, 163, 184, 0.15)"
          strokeWidth="1"
        />
      ))}

      {/* 축선 */}
      {angles.map((a, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={center + radius * Math.cos(a)}
          y2={center + radius * Math.sin(a)}
          stroke="rgba(148, 163, 184, 0.1)"
          strokeWidth="1"
        />
      ))}

      {/* 데이터 영역 */}
      <motion.polygon
        points={points}
        fill={`${color}33`}
        stroke={color}
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: `${center}px ${center}px` }}
      />

      {/* 꼭짓점 */}
      {normalizedProfile.map((v, i) => {
        const r = radius * Math.max(v, 0.1);
        const x = center + r * Math.cos(angles[i]);
        const y = center + r * Math.sin(angles[i]);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        );
      })}

      {/* 레이블 */}
      {dimensionLabels.map((label, i) => {
        const labelR = radius + 14;
        const x = center + labelR * Math.cos(angles[i]);
        const y = center + labelR * Math.sin(angles[i]);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#94A3B8"
            fontSize="10"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default function ResultCard({
  character,
  similarity,
  userProfile,
}: ResultCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* 캐릭터 이미지 */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      >
        <div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4"
          style={{
            borderColor: character.color,
            boxShadow: `0 0 50px ${character.color}40, 0 0 100px ${character.color}20`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${character.color}15 0%, ${character.color}05 100%)`,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2
          className="font-[family-name:var(--font-title)] text-3xl md:text-5xl mb-1"
          style={{ color: character.color }}
        >
          {character.name}
        </h2>
        <p className="text-slate-400 text-sm">{character.nameEn}</p>
      </motion.div>

      {/* 매칭률 */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-sm text-slate-400">나와의 싱크로율</span>
        <div className="flex items-center justify-center gap-2 mt-1">
          <motion.span
            className="text-4xl font-bold text-gold-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {similarity}%
          </motion.span>
        </div>
      </motion.div>

      {/* 카드 본문 */}
      <motion.div
        className="card-glow bg-ocean-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-ocean-700/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* 캐릭터 설명 */}
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {character.description}
        </p>

        {/* 구분선 */}
        <div
          className="h-px w-full mb-6 opacity-30"
          style={{
            background: `linear-gradient(to right, transparent, ${character.color}, transparent)`,
          }}
        />

        {/* 당신과 닮은 점 */}
        <div className="mb-6">
          <h3
            className="text-sm font-bold mb-3 tracking-wider"
            style={{ color: character.color }}
          >
            당신과 닮은 점
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {character.similarity}
          </p>
        </div>

        {/* 특성 태그 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {character.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 text-xs rounded-full border"
              style={{
                borderColor: `${character.color}40`,
                color: character.color,
                backgroundColor: `${character.color}10`,
              }}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* 명대사 */}
        <motion.div
          className="bg-ocean-900/50 rounded-xl p-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <p className="text-sm text-slate-500 mb-1">명대사</p>
          <p
            className="text-lg font-[family-name:var(--font-title)] leading-relaxed"
            style={{ color: character.color }}
          >
            &ldquo;{character.quote}&rdquo;
          </p>
        </motion.div>

        {/* 레이더 차트 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <RadarChart profile={userProfile} color={character.color} />
        </motion.div>
      </motion.div>
    </div>
  );
}
