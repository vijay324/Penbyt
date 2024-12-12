// teamMembers.ts
export interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  socialMedia: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  portfolio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "S. Vijay Kumar",
    title: "Chief Technology Officer",
    image: "/vijay.svg",
    description:
      "Hi,👋🏻 I'm S. Vijay Kumar, Co-Founder & CTO(Full stack developer) of Penbyt. With a passion for technology and innovation, I lead our technical strategies and product development.",
    socialMedia: {
      linkedin: "https://linkedin.com/in/vijaykumar",
      twitter: "https://twitter.com/always_svk",
      instagram: "https://www.instagram.com/always_svk/",
    },
    portfolio: "https://alwayssvk.vercel.app",
  },
];
