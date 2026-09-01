import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Правда Театра - студия для взрослых и детей",
  description:
    "Камерная театральная студия в Москве: маленькие группы для взрослых и детей, действующие актеры-педагоги и роль на сцене в финале курса.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Правда Театра - взрослые и дети играют всерьез",
    description:
      "Ноябрьский набор в театральную студию для взрослых: 6 месяцев, маленькая группа, сцена в финале.",
    images: ["/hero-theatre.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
