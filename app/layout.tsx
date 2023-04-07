import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/clientOnly";
import Modal from "./components/Modal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal isOpen={true} />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
