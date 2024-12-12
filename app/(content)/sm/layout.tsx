import Header from "./Header";

export const metadata = {
  title: "Study Materials - Penbyt",
  description:
    "Penbyt offers a comprehensive collection of study materials for interns, covering a wide range of subjects. Enhance your learning experience with our up-to-date resources and user-friendly platform.",
  keywords:
    "study materials, Penbyt, learning resources, educational materials, internship study, intern resources, subject materials, study guides",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
