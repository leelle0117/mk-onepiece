"use client";

interface CharacterAvatarProps {
  characterId: string;
  size?: number;
}

export default function CharacterAvatar({ characterId, size = 200 }: CharacterAvatarProps) {
  const avatars: Record<string, React.ReactNode> = {
    luffy: <LuffyAvatar />,
    zoro: <ZoroAvatar />,
    nami: <NamiAvatar />,
    usopp: <UsoppAvatar />,
    sanji: <SanjiAvatar />,
    chopper: <ChopperAvatar />,
    robin: <RobinAvatar />,
    franky: <FrankyAvatar />,
    brook: <BrookAvatar />,
    jinbe: <JinbeAvatar />,
    shanks: <ShanksAvatar />,
    law: <LawAvatar />,
  };

  return (
    <div style={{ width: size, height: size }} className="relative">
      <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        {avatars[characterId] ?? avatars.luffy}
      </svg>
    </div>
  );
}

/* ───── 루피 (Luffy) ───── */
function LuffyAvatar() {
  return (
    <g>
      {/* 배경 원 */}
      <circle cx="100" cy="100" r="95" fill="#1a0505" stroke="#EF4444" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="85" y="130" width="30" height="20" rx="5" fill="#F5C6A0" />
      {/* 빨간 조끼 */}
      <path d="M60 148 Q65 138 85 140 L85 175 Q72 178 60 175 Z" fill="#DC2626" />
      <path d="M115 140 Q135 138 140 148 L140 175 Q128 178 115 175 Z" fill="#DC2626" />
      {/* 가슴 X자 흉터 */}
      <line x1="88" y1="150" x2="112" y2="170" stroke="#D4A07A" strokeWidth="2" />
      <line x1="112" y1="150" x2="88" y2="170" stroke="#D4A07A" strokeWidth="2" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="110" rx="38" ry="35" fill="#F5C6A0" />
      {/* 머리카락 (검은색) */}
      <ellipse cx="100" cy="88" rx="40" ry="25" fill="#1A1A1A" />
      <ellipse cx="68" cy="100" rx="10" ry="18" fill="#1A1A1A" />
      <ellipse cx="132" cy="100" rx="10" ry="18" fill="#1A1A1A" />
      {/* 앞머리 삐죽삐죽 */}
      <path d="M65 88 Q70 70 80 85" fill="#1A1A1A" />
      <path d="M78 82 Q85 62 92 80" fill="#1A1A1A" />
      <path d="M90 80 Q98 58 108 78" fill="#1A1A1A" />
      <path d="M105 80 Q115 62 122 82" fill="#1A1A1A" />
      <path d="M118 85 Q128 68 135 88" fill="#1A1A1A" />
      {/* 밀짚모자 */}
      <ellipse cx="100" cy="78" rx="50" ry="12" fill="#F59E0B" />
      <path d="M58 78 Q60 50 100 45 Q140 50 142 78" fill="#F59E0B" />
      <rect x="55" y="74" width="90" height="8" rx="3" fill="#DC2626" />
      {/* 눈 */}
      <circle cx="85" cy="108" r="5" fill="#1A1A1A" />
      <circle cx="115" cy="108" r="5" fill="#1A1A1A" />
      <circle cx="87" cy="106" r="2" fill="white" />
      <circle cx="117" cy="106" r="2" fill="white" />
      {/* 왼쪽 눈 밑 흉터 */}
      <path d="M79 115 Q82 118 85 115" stroke="#D4775A" strokeWidth="1.5" fill="none" />
      {/* 큰 웃는 입 */}
      <path d="M78 122 Q100 142 122 122" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 이빨 */}
      <path d="M82 124 Q100 138 118 124 L118 126 Q100 134 82 126 Z" fill="white" />
    </g>
  );
}

/* ───── 조로 (Zoro) ───── */
function ZoroAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#051a05" stroke="#22C55E" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="83" y="130" width="34" height="20" rx="5" fill="#F0BD98" />
      {/* 몸통 (초록 하오리) */}
      <path d="M55 148 Q70 138 83 140 L83 180 Q65 182 55 178 Z" fill="#166534" />
      <path d="M117 140 Q130 138 145 148 L145 178 Q135 182 117 180 Z" fill="#166534" />
      <rect x="83" y="140" width="34" height="40" fill="#1A1A1A" />
      {/* 허리띠 */}
      <rect x="55" y="168" width="90" height="5" rx="2" fill="#16A34A" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="110" rx="38" ry="34" fill="#F0BD98" />
      {/* 초록 머리카락 */}
      <ellipse cx="100" cy="88" rx="38" ry="24" fill="#16A34A" />
      <ellipse cx="66" cy="98" rx="8" ry="14" fill="#16A34A" />
      <ellipse cx="134" cy="98" rx="8" ry="14" fill="#16A34A" />
      {/* 짧은 머리 삐죽 */}
      <path d="M70 85 L68 68 L78 82" fill="#16A34A" />
      <path d="M85 78 L88 60 L95 76" fill="#16A34A" />
      <path d="M100 76 L103 58 L110 75" fill="#16A34A" />
      <path d="M115 78 L120 62 L126 82" fill="#16A34A" />
      {/* 왼쪽 눈 (감긴 흉터) */}
      <line x1="78" y1="108" x2="92" y2="108" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 103 L90 113" stroke="#C75050" strokeWidth="1.5" strokeLinecap="round" />
      {/* 오른쪽 눈 (날카로운) */}
      <ellipse cx="115" cy="108" rx="5" ry="4" fill="#1A1A1A" />
      <circle cx="116" cy="107" r="1.5" fill="white" />
      <line x1="108" y1="102" x2="120" y2="100" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* 입 (무뚝뚝) */}
      <line x1="88" y1="125" x2="112" y2="125" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* 칼 3개 */}
      <rect x="38" y="60" width="4" height="80" rx="2" fill="#94A3B8" transform="rotate(-15, 40, 100)" />
      <rect x="36" y="58" width="8" height="6" rx="1" fill="#1A1A1A" transform="rotate(-15, 40, 100)" />
      <rect x="152" y="60" width="4" height="80" rx="2" fill="#94A3B8" transform="rotate(15, 154, 100)" />
      <rect x="150" y="58" width="8" height="6" rx="1" fill="#1A1A1A" transform="rotate(15, 154, 100)" />
      <rect x="160" y="65" width="4" height="75" rx="2" fill="#E2E8F0" transform="rotate(20, 162, 100)" />
      <rect x="158" y="63" width="8" height="6" rx="1" fill="#7C3AED" transform="rotate(20, 162, 100)" />
    </g>
  );
}

/* ───── 나미 (Nami) ───── */
function NamiAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#1a0f05" stroke="#F97316" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="87" y="130" width="26" height="18" rx="5" fill="#FACCAB" />
      {/* 몸통 (비키니 탑) */}
      <path d="M65 155 Q80 142 87 145 L87 170 Q72 172 65 168 Z" fill="#3B82F6" />
      <path d="M113 145 Q120 142 135 155 L135 168 Q128 172 113 170 Z" fill="#3B82F6" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="112" rx="35" ry="32" fill="#FACCAB" />
      {/* 오렌지 머리카락 (긴 웨이브) */}
      <ellipse cx="100" cy="90" rx="42" ry="28" fill="#F97316" />
      <path d="M58 90 Q55 120 52 155" stroke="#F97316" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M142 90 Q145 120 148 155" stroke="#F97316" strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* 앞머리 */}
      <path d="M70 88 Q80 75 92 86" fill="#F97316" />
      <path d="M88 84 Q95 72 105 82" fill="#F97316" />
      <path d="M102 83 Q110 72 120 85" fill="#F97316" />
      {/* 눈 (큰 눈) */}
      <ellipse cx="86" cy="110" rx="6" ry="7" fill="#1A1A1A" />
      <ellipse cx="114" cy="110" rx="6" ry="7" fill="#1A1A1A" />
      <circle cx="88" cy="108" r="2.5" fill="white" />
      <circle cx="116" cy="108" r="2.5" fill="white" />
      {/* 속눈썹 */}
      <path d="M78 103 Q83 100 90 103" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M110 103 Q117 100 122 103" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      {/* 미소 */}
      <path d="M88 124 Q100 132 112 124" stroke="#E0755A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 코 */}
      <circle cx="100" cy="117" r="1.5" fill="#E8A882" />
      {/* 왼팔 타투 (풍차+귤) */}
      <circle cx="52" cy="160" r="5" fill="none" stroke="#F97316" strokeWidth="1.5" />
      <line x1="52" y1="155" x2="52" y2="150" stroke="#F97316" strokeWidth="1" />
    </g>
  );
}

/* ───── 우솝 (Usopp) ───── */
function UsoppAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#1a1a05" stroke="#EAB308" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="88" y="130" width="24" height="18" rx="5" fill="#D4A06E" />
      {/* 몸통 (오버올) */}
      <path d="M62 150 Q75 142 88 145 L88 180 Q72 182 62 178 Z" fill="#854D0E" />
      <path d="M112 145 Q125 142 138 150 L138 178 Q128 182 112 180 Z" fill="#854D0E" />
      <rect x="88" y="145" width="24" height="35" fill="#EAB308" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="112" rx="34" ry="32" fill="#D4A06E" />
      {/* 곱슬 검은 머리카락 */}
      <circle cx="75" cy="82" r="14" fill="#1A1A1A" />
      <circle cx="95" cy="76" r="14" fill="#1A1A1A" />
      <circle cx="115" cy="78" r="13" fill="#1A1A1A" />
      <circle cx="130" cy="86" r="11" fill="#1A1A1A" />
      <circle cx="65" cy="95" r="10" fill="#1A1A1A" />
      <circle cx="137" cy="98" r="9" fill="#1A1A1A" />
      {/* 고글 (이마에) */}
      <ellipse cx="85" cy="90" rx="14" ry="9" fill="none" stroke="#94A3B8" strokeWidth="3" />
      <ellipse cx="115" cy="90" rx="14" ry="9" fill="none" stroke="#94A3B8" strokeWidth="3" />
      <line x1="99" y1="90" x2="101" y2="90" stroke="#94A3B8" strokeWidth="3" />
      <ellipse cx="85" cy="90" rx="11" ry="6" fill="#60A5FA" opacity="0.4" />
      <ellipse cx="115" cy="90" rx="11" ry="6" fill="#60A5FA" opacity="0.4" />
      {/* 긴 코!! */}
      <path d="M98 112 Q100 108 102 112 L106 138 Q100 142 94 138 Z" fill="#C68E5C" />
      <ellipse cx="100" cy="139" rx="6" ry="3" fill="#BA8050" />
      {/* 눈 */}
      <circle cx="86" cy="108" r="4" fill="#1A1A1A" />
      <circle cx="114" cy="108" r="4" fill="#1A1A1A" />
      <circle cx="87" cy="107" r="1.5" fill="white" />
      <circle cx="115" cy="107" r="1.5" fill="white" />
      {/* 입 (살짝 놀란 듯) */}
      <ellipse cx="100" cy="128" rx="6" ry="4" fill="#1A1A1A" />
      <ellipse cx="100" cy="127" rx="4" ry="2" fill="white" />
      {/* 파칭코 */}
      <path d="M40 155 L50 140 L55 145" stroke="#854D0E" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ───── 상디 (Sanji) ───── */
function SanjiAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#05051a" stroke="#3B82F6" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="87" y="130" width="26" height="18" rx="5" fill="#F5C6A0" />
      {/* 넥타이 */}
      <polygon points="100,140 96,155 100,180 104,155" fill="#3B82F6" />
      {/* 정장 */}
      <path d="M58 150 Q75 138 87 142 L87 180 Q68 182 58 178 Z" fill="#1A1A1A" />
      <path d="M113 142 Q125 138 142 150 L142 178 Q132 182 113 180 Z" fill="#1A1A1A" />
      {/* 셔츠 */}
      <path d="M87 142 L87 180 L113 180 L113 142" fill="#1E293B" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="112" rx="35" ry="33" fill="#F5C6A0" />
      {/* 금발 머리 (한쪽 눈 가림) */}
      <ellipse cx="100" cy="88" rx="38" ry="26" fill="#FBBF24" />
      <path d="M62 88 Q60 110 65 125" stroke="#FBBF24" strokeWidth="18" fill="none" strokeLinecap="round" />
      {/* 왼쪽 눈 가려짐 */}
      <path d="M68 95 Q78 88 92 92 L88 115 Q72 118 65 110 Z" fill="#FBBF24" />
      {/* 꼬인 눈썹 (오른쪽만 보임) */}
      <path d="M108 100 Q118 95 122 100 Q120 96 125 98" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 오른쪽 눈 */}
      <ellipse cx="115" cy="108" rx="5" ry="6" fill="#1A1A1A" />
      <circle cx="116" cy="107" r="2" fill="white" />
      {/* 미소 */}
      <path d="M92 125 Q100 130 108 125" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 턱수염 */}
      <path d="M92 132 Q100 136 108 132" stroke="#FBBF24" strokeWidth="1" fill="none" opacity="0.5" />
      {/* 담배 */}
      <line x1="108" y1="125" x2="140" y2="118" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
      {/* 연기 */}
      <path d="M140 118 Q144 112 142 106 Q146 102 143 96" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.4" />
    </g>
  );
}

/* ───── 쵸파 (Chopper) ───── */
function ChopperAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#1a0510" stroke="#EC4899" strokeWidth="2" opacity="0.3" />
      {/* 몸통 (작고 둥근) */}
      <ellipse cx="100" cy="160" rx="30" ry="25" fill="#C68E5C" />
      {/* 바지 */}
      <ellipse cx="100" cy="175" rx="28" ry="12" fill="#F97316" />
      {/* 얼굴 (둥글둥글) */}
      <circle cx="100" cy="110" r="38" fill="#C68E5C" />
      {/* 뿔 (사슴뿔) */}
      <path d="M72 72 L65 45 L58 50 L62 60 L65 52 L68 62" stroke="#8B5E3B" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M128 72 L135 45 L142 50 L138 60 L135 52 L132 62" stroke="#8B5E3B" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* 분홍 모자 */}
      <path d="M62 95 Q65 65 100 60 Q135 65 138 95" fill="#EC4899" />
      <ellipse cx="100" cy="95" rx="42" ry="10" fill="#EC4899" />
      {/* 모자의 X표시 */}
      <line x1="92" y1="74" x2="108" y2="88" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="108" y1="74" x2="92" y2="88" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* 큰 눈 */}
      <circle cx="84" cy="112" r="10" fill="white" />
      <circle cx="116" cy="112" r="10" fill="white" />
      <circle cx="86" cy="112" r="6" fill="#1A1A1A" />
      <circle cx="118" cy="112" r="6" fill="#1A1A1A" />
      <circle cx="88" cy="110" r="2.5" fill="white" />
      <circle cx="120" cy="110" r="2.5" fill="white" />
      {/* 파란코 (특징!) */}
      <circle cx="100" cy="122" r="6" fill="#3B82F6" />
      <circle cx="102" cy="120" r="2" fill="#60A5FA" opacity="0.6" />
      {/* 입 */}
      <path d="M90 132 Q100 138 110 132" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ───── 로빈 (Robin) ───── */
function RobinAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#0a051a" stroke="#8B5CF6" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="88" y="130" width="24" height="18" rx="5" fill="#F0C8A8" />
      {/* 몸통 (보라 자켓) */}
      <path d="M58 150 Q75 138 88 142 L88 180 Q68 182 58 178 Z" fill="#6D28D9" />
      <path d="M112 142 Q125 138 142 150 L142 178 Q132 182 112 180 Z" fill="#6D28D9" />
      <rect x="88" y="142" width="24" height="38" fill="#1E1B4B" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="112" rx="34" ry="33" fill="#F0C8A8" />
      {/* 검은 머리카락 (긴 생머리) */}
      <ellipse cx="100" cy="88" rx="40" ry="28" fill="#1A1A1A" />
      <path d="M60 88 Q55 120 50 162" stroke="#1A1A1A" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M140 88 Q145 120 150 162" stroke="#1A1A1A" strokeWidth="18" fill="none" strokeLinecap="round" />
      {/* 앞머리 (가르마) */}
      <path d="M68 90 Q80 78 100 82 L95 96 Q80 92 68 98 Z" fill="#1A1A1A" />
      <path d="M132 90 Q120 78 100 82 L105 96 Q120 92 132 98 Z" fill="#1A1A1A" />
      {/* 눈 (차분하고 지적인) */}
      <ellipse cx="85" cy="110" rx="5" ry="5.5" fill="#3B82F6" />
      <circle cx="86" cy="109" r="2" fill="white" />
      <ellipse cx="115" cy="110" rx="5" ry="5.5" fill="#3B82F6" />
      <circle cx="116" cy="109" r="2" fill="white" />
      {/* 속눈썹 */}
      <path d="M78 104 Q82 101 90 104" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M110 104 Q118 101 122 104" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      {/* 미소 (미스테리한) */}
      <path d="M90 124 Q100 128 110 124" stroke="#C07060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* 코 */}
      <path d="M99 115 L100 120 L97 120" stroke="#D4A882" strokeWidth="1" fill="none" />
    </g>
  );
}

/* ───── 프랑키 (Franky) ───── */
function FrankyAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#051515" stroke="#06B6D4" strokeWidth="2" opacity="0.3" />
      {/* 몸통 (거대, 로봇) */}
      <rect x="55" y="145" width="90" height="50" rx="10" fill="#3B82F6" />
      {/* 금속 어깨 */}
      <circle cx="60" cy="150" r="15" fill="#94A3B8" />
      <circle cx="140" cy="150" r="15" fill="#94A3B8" />
      {/* 별 마크 */}
      <polygon points="100,150 103,158 112,158 105,163 108,172 100,167 92,172 95,163 88,158 97,158" fill="#FBBF24" />
      {/* 목 (두꺼운) */}
      <rect x="82" y="128" width="36" height="20" rx="5" fill="#F0BD98" />
      {/* 턱 (사각) */}
      <rect x="66" y="100" width="68" height="42" rx="12" fill="#F0BD98" />
      {/* 머리 위쪽 */}
      <ellipse cx="100" cy="95" rx="38" ry="28" fill="#F0BD98" />
      {/* 파란 머리 (짧은 리젠트) */}
      <path d="M65 85 Q70 50 100 42 Q130 50 135 85" fill="#06B6D4" />
      <path d="M80 55 L75 35 L85 50" fill="#06B6D4" />
      <path d="M95 48 L93 28 L102 45" fill="#06B6D4" />
      <path d="M110 48 L112 30 L118 50" fill="#06B6D4" />
      <path d="M125 58 L130 40 L132 58" fill="#06B6D4" />
      {/* 선글라스 */}
      <rect x="68" y="96" width="26" height="18" rx="5" fill="#1A1A1A" />
      <rect x="106" y="96" width="26" height="18" rx="5" fill="#1A1A1A" />
      <line x1="94" y1="105" x2="106" y2="105" stroke="#1A1A1A" strokeWidth="3" />
      <rect x="70" y="98" width="22" height="14" rx="4" fill="#06B6D4" opacity="0.5" />
      <rect x="108" y="98" width="22" height="14" rx="4" fill="#06B6D4" opacity="0.5" />
      {/* 크게 웃는 입 */}
      <path d="M78 125 Q100 145 122 125" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M82 127 Q100 140 118 127" fill="white" />
      {/* 금속 코 */}
      <rect x="96" y="116" width="8" height="6" rx="3" fill="#94A3B8" />
    </g>
  );
}

/* ───── 브룩 (Brook) ───── */
function BrookAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#0a0a15" stroke="#6366F1" strokeWidth="2" opacity="0.3" />
      {/* 넥타이 */}
      <polygon points="100,140 95,155 100,180 105,155" fill="#6366F1" />
      {/* 정장 */}
      <path d="M58 148 Q75 136 88 140 L88 180 Q68 182 58 178 Z" fill="#1A1A1A" />
      <path d="M112 140 Q125 136 142 148 L142 178 Q132 182 112 180 Z" fill="#1A1A1A" />
      {/* 목 (해골, 가는) */}
      <rect x="92" y="128" width="16" height="18" rx="3" fill="#F5F0E8" />
      {/* 두개골 */}
      <ellipse cx="100" cy="108" rx="32" ry="34" fill="#F5F0E8" />
      {/* 아프로 헤어! */}
      <circle cx="100" cy="72" r="38" fill="#1A1A1A" />
      <circle cx="62" cy="85" r="14" fill="#1A1A1A" />
      <circle cx="138" cy="85" r="14" fill="#1A1A1A" />
      {/* 눈 구멍 */}
      <circle cx="85" cy="108" r="10" fill="#1A1A1A" />
      <circle cx="115" cy="108" r="10" fill="#1A1A1A" />
      {/* 눈빛 (영혼의 불꽃) */}
      <circle cx="85" cy="108" r="3" fill="#FBBF24" />
      <circle cx="115" cy="108" r="3" fill="#FBBF24" />
      <circle cx="85" cy="108" r="5" fill="#FBBF24" opacity="0.3" />
      <circle cx="115" cy="108" r="5" fill="#FBBF24" opacity="0.3" />
      {/* 코 구멍 */}
      <circle cx="96" cy="120" r="3" fill="#D4C8B8" />
      <circle cx="104" cy="120" r="3" fill="#D4C8B8" />
      {/* 이빨 */}
      <rect x="82" y="128" width="36" height="10" rx="3" fill="#F5F0E8" />
      <line x1="88" y1="128" x2="88" y2="138" stroke="#D4C8B8" strokeWidth="0.5" />
      <line x1="94" y1="128" x2="94" y2="138" stroke="#D4C8B8" strokeWidth="0.5" />
      <line x1="100" y1="128" x2="100" y2="138" stroke="#D4C8B8" strokeWidth="0.5" />
      <line x1="106" y1="128" x2="106" y2="138" stroke="#D4C8B8" strokeWidth="0.5" />
      <line x1="112" y1="128" x2="112" y2="138" stroke="#D4C8B8" strokeWidth="0.5" />
      {/* 모자 (탑햇) */}
      <rect x="75" y="35" width="50" height="35" rx="5" fill="#1A1A1A" />
      <ellipse cx="100" cy="70" rx="35" ry="6" fill="#1A1A1A" />
      <rect x="80" y="62" width="40" height="3" fill="#6366F1" />
    </g>
  );
}

/* ───── 징베 (Jinbe) ───── */
function JinbeAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#051018" stroke="#0EA5E9" strokeWidth="2" opacity="0.3" />
      {/* 몸통 (거대한 체격) */}
      <rect x="45" y="142" width="110" height="55" rx="15" fill="#0EA5E9" />
      {/* 기모노 */}
      <path d="M50 148 L100 155 L150 148 L150 180 L50 180 Z" fill="#1E3A5F" />
      <line x1="100" y1="148" x2="100" y2="180" stroke="#0EA5E9" strokeWidth="2" />
      {/* 목 (두꺼운) */}
      <rect x="76" y="126" width="48" height="22" rx="8" fill="#4A90C4" />
      {/* 얼굴 (넓은, 어인) */}
      <ellipse cx="100" cy="105" rx="42" ry="38" fill="#4A90C4" />
      {/* 이마 */}
      <path d="M60 90 Q80 70 100 68 Q120 70 140 90" fill="#3A7AB0" />
      {/* 눈 (작고 날카로운) */}
      <line x1="76" y1="102" x2="92" y2="102" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
      <line x1="108" y1="102" x2="124" y2="102" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="84" cy="102" r="2.5" fill="#1A1A1A" />
      <circle cx="116" cy="102" r="2.5" fill="#1A1A1A" />
      {/* 코 (넓고 큰) */}
      <ellipse cx="100" cy="114" rx="10" ry="6" fill="#3A7AB0" />
      {/* 입 (큰) */}
      <path d="M78 125 Q100 135 122 125" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 턱밑 선 */}
      <path d="M70 132 Q100 148 130 132" stroke="#3A7AB0" strokeWidth="1.5" fill="none" />
      {/* 이빨 */}
      <path d="M82 126 Q100 132 118 126 L115 128 Q100 130 85 128 Z" fill="white" />
      {/* 머리 위 문양 */}
      <path d="M80 72 L100 62 L120 72" stroke="#1E3A5F" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ───── 샹크스 (Shanks) ───── */
function ShanksAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#1a0505" stroke="#DC2626" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="85" y="130" width="30" height="18" rx="5" fill="#F0BD98" />
      {/* 망토 */}
      <path d="M45 148 Q70 136 85 140 L85 180 Q60 185 45 178 Z" fill="#1A1A1A" />
      <path d="M115 140 Q130 136 155 148 L155 178 Q140 185 115 180 Z" fill="#1A1A1A" />
      {/* 셔츠 */}
      <rect x="85" y="140" width="30" height="40" fill="#F5F5F5" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="110" rx="38" ry="35" fill="#F0BD98" />
      {/* 빨간 머리카락 */}
      <ellipse cx="100" cy="86" rx="42" ry="28" fill="#DC2626" />
      <ellipse cx="62" cy="96" rx="10" ry="16" fill="#DC2626" />
      <ellipse cx="138" cy="96" rx="10" ry="16" fill="#DC2626" />
      {/* 앞머리 삐죽 */}
      <path d="M65 85 Q70 65 78 82" fill="#DC2626" />
      <path d="M76 78 Q84 58 92 76" fill="#DC2626" />
      <path d="M88 76 Q96 56 105 74" fill="#DC2626" />
      <path d="M102 76 Q112 60 120 78" fill="#DC2626" />
      <path d="M118 80 Q128 65 135 84" fill="#DC2626" />
      {/* 왼쪽 눈 흉터 3줄 */}
      <line x1="76" y1="96" x2="72" y2="120" stroke="#C75050" strokeWidth="2" strokeLinecap="round" />
      <line x1="82" y1="96" x2="78" y2="120" stroke="#C75050" strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="96" x2="84" y2="120" stroke="#C75050" strokeWidth="2" strokeLinecap="round" />
      {/* 눈 (날카롭지만 여유로운) */}
      <ellipse cx="82" cy="108" rx="5" ry="4.5" fill="#1A1A1A" />
      <circle cx="83" cy="107" r="1.5" fill="white" />
      <ellipse cx="118" cy="108" rx="5" ry="4.5" fill="#1A1A1A" />
      <circle cx="119" cy="107" r="1.5" fill="white" />
      {/* 여유로운 미소 */}
      <path d="M85 124 Q100 134 115 124" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 턱수염 (무정형) */}
      <path d="M80 130 Q82 136 84 130" stroke="#8B2020" strokeWidth="1" fill="none" />
      <path d="M90 132 Q92 138 94 132" stroke="#8B2020" strokeWidth="1" fill="none" />
    </g>
  );
}

/* ───── 트라팔가 로 (Law) ───── */
function LawAvatar() {
  return (
    <g>
      <circle cx="100" cy="100" r="95" fill="#0a0518" stroke="#A855F7" strokeWidth="2" opacity="0.3" />
      {/* 목 */}
      <rect x="87" y="130" width="26" height="18" rx="5" fill="#F0BD98" />
      {/* 후드 코트 */}
      <path d="M52 150 Q70 138 87 142 L87 180 Q65 182 52 178 Z" fill="#1A1A1A" />
      <path d="M113 142 Q130 138 148 150 L148 178 Q135 182 113 180 Z" fill="#1A1A1A" />
      <rect x="87" y="142" width="26" height="38" fill="#FBBF24" />
      {/* 하트 해적 심볼 (옷에) */}
      <path d="M96 155 Q96 150 100 150 Q104 150 104 155 Q104 160 100 164 Q96 160 96 155" fill="#1A1A1A" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="112" rx="35" ry="33" fill="#F0BD98" />
      {/* 턱수염 (작은) */}
      <rect x="94" y="130" width="12" height="6" rx="2" fill="#1A1A1A" />
      {/* 모자 (흰색 점박이) */}
      <path d="M55 95 Q60 55 100 48 Q140 55 145 95" fill="white" />
      <ellipse cx="100" cy="95" rx="48" ry="10" fill="white" />
      {/* 점 무늬 */}
      <circle cx="75" cy="70" r="5" fill="#1A1A1A" />
      <circle cx="95" cy="60" r="5" fill="#1A1A1A" />
      <circle cx="115" cy="62" r="5" fill="#1A1A1A" />
      <circle cx="130" cy="72" r="5" fill="#1A1A1A" />
      <circle cx="85" cy="78" r="4" fill="#1A1A1A" />
      <circle cx="105" cy="75" r="4" fill="#1A1A1A" />
      <circle cx="122" cy="82" r="4" fill="#1A1A1A" />
      <circle cx="72" cy="85" r="3" fill="#1A1A1A" />
      {/* 머리카락 (모자 아래 검은) */}
      <path d="M58 95 Q60 105 65 108" fill="#1A1A1A" />
      <path d="M142 95 Q140 105 135 108" fill="#1A1A1A" />
      <rect x="60" y="93" width="80" height="8" fill="#1A1A1A" />
      {/* 눈 (날카로운, 다크서클) */}
      <ellipse cx="84" cy="110" rx="8" ry="6" fill="#E8D4C0" />
      <ellipse cx="116" cy="110" rx="8" ry="6" fill="#E8D4C0" />
      <ellipse cx="84" cy="110" rx="4" ry="5" fill="#94A3B8" />
      <circle cx="85" cy="109" r="2" fill="white" />
      <ellipse cx="116" cy="110" rx="4" ry="5" fill="#94A3B8" />
      <circle cx="117" cy="109" r="2" fill="white" />
      {/* 눈 밑 다크서클 */}
      <path d="M76 116 Q84 120 92 116" stroke="#D4A882" strokeWidth="1" fill="none" />
      <path d="M108 116 Q116 120 124 116" stroke="#D4A882" strokeWidth="1" fill="none" />
      {/* 입 (무표정) */}
      <line x1="90" y1="126" x2="110" y2="126" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* 손에 DEATH 문신 */}
      <text x="56" y="178" fill="#1A1A1A" fontSize="6" fontWeight="bold">D E A T H</text>
    </g>
  );
}
