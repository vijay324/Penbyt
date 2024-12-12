export const metadata = {
  title: "About - Penbyt",
  description:
    "Learn more about Penbyt, your trusted provider of study materials and resources for interns. Discover our mission, values, team, and commitment to enhancing the internship experience through quality education.",
  keywords:
    "about Penbyt, company information, mission, values, team, internship resources, study materials, educational resources",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
