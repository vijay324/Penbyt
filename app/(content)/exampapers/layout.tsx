import Header from "./Header";

export const metadata = {
  title: "Exam Papers - Penbyt",
  description:
    "Penbyt offers a wide range of exam papers to help interns practice and prepare effectively for their exams. Access our extensive collection of past papers and practice tests to enhance your exam readiness.",
  keywords:
    "exam papers, Penbyt, past papers, practice tests, intern exam preparation, exam resources, study materials, exam practice",
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
