import { Lato } from "next/font/google";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const roboto = Lato({
  weight: ["100", "300", "400", "700", "900"], // Add the different weights you need
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavigationBar />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
