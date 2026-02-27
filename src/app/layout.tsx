import type { Metadata } from "next";
import { Black_Han_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "나의 원피스 캐릭터 찾기",
  description:
    "성향 분석을 통해 나와 가장 잘 맞는 원피스 캐릭터를 찾아보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${blackHanSans.variable} ${notoSansKR.variable} font-[family-name:var(--font-body)] antialiased wave-bg`}
      >
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
