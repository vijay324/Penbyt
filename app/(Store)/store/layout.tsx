import { Lato } from "next/font/google";

const roboto = Lato({
  weight: ["100", "300", "400", "700", "900"], // Add the different weights you need
  subsets: ["latin"],
});

export const metadata = {
  title: "Store - Penbyt",
  description:
    "Penbyt’s store offers a diverse range of including individual courses, comprehensive bundles, and essential software. Explore our collection to find up-to-date educational content that enhances learning and simplifies the internship verification process. Whether you need targeted courses, curated bundles for comprehensive study, or specialized software tools, Penbyt provides a user-friendly platform to support your educational journey.",
  keywords:
    "internship resources, study courses, educational bundles, software for interns, Penbyt store, learning materials, internship verification tools, student resources, comprehensive study guides",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
