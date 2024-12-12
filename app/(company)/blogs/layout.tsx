export const metadata = {
  title: "Blogs & News - Penbyt",
  description:
    "Stay updated with Penbyt's latest career opportunities and news. Discover job openings, internships, and learn how to join our innovative team of study materials and resource experts.",
  keywords:
    "Penbyt careers, job openings, internships, career opportunities, Penbyt jobs, employment, intern positions, study materials careers",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white dark:bg-black">{children}</section>;
}
