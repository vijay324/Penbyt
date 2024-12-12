export const metadata = {
  title: "Gate Materials - Penbyt",
  description:
    "Penbyt provides high-quality Gate materials to help interns prepare effectively for their exams. Explore our comprehensive resources, including study guides, practice tests, and more, designed to support your Gate preparation.",
  keywords:
    "Gate materials, Penbyt, Gate exam preparation, study guides, practice tests, Gate study materials, intern resources, Gate preparation resources",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
