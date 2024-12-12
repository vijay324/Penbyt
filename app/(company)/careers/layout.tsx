export const metadata = {
  title: "Careers - Penbyt",
  description:
    "Explore career opportunities at Penbyt, a leading provider of study materials and resources for interns. Discover our current job openings, internships, and learn how you can contribute to our innovative team.",
  keywords:
    "careers, Penbyt careers, job openings, internships, career opportunities, Penbyt jobs, employment opportunities, intern careers",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
