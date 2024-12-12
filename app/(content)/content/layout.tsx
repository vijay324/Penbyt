export const metadata = {
  title: "Content - Penbyt",
  description:
    "Explore Penbyt's comprehensive content page for interns, featuring a diverse range of study materials and resources. Discover curated content, study guides, and more to support your learning journey.",
  keywords:
    "content page, Penbyt, study materials, intern resources, educational content, study guides, learning resources, content repository",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
