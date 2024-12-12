export const metadata = {
  title: "Internship Verification - Penbyt",
  description:
    "Penbyt offers comprehensive study materials and resources for interns, designed to enhance learning and streamline the internship verification process. Explore our vast collection of subjects, up-to-date content, and user-friendly interface.",
  keywords:
    "internship verification, study materials, resources for interns, Penbyt, learning materials, educational resources, internship process, student resources",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
