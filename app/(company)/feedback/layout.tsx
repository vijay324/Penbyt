export const metadata = {
  title: "Feedback - Penbyt",
  description:
    "Provide feedback or contact Penbyt for inquiries, support, or collaboration opportunities related to our study materials and resources for interns. Reach out to our team and explore how we can assist you.",
  keywords:
    "feedback Penbyt, contact Penbyt, contact us, support, collaboration, study materials, internship resources, intern support, Penbyt feedback",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
