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
    title: "Full Stack Developer",
    image: "/vijay.svg",
    description:
      "Hi,👋🏻 I'm S. Vijay Kumar, Founder & CTO(Full stack developer) of Penbyt. With a passion for technology and innovation, I lead our technical strategies and product development.",
    socialMedia: {
      linkedin: "https://linkedin.com/in/vijaykumar",
      twitter: "https://twitter.com/always_svk",
      instagram: "https://www.instagram.com/always_svk/",
    },
    portfolio: "https://alwayssvk.vercel.app",
  },
  {
    name: "S.VIJAY KUMAR",
    title: "Content Manager",
    image: "/vijay.svg",
    description:
      "S.VIJAY KUMAR is manages whole content on this site. His expertise in managing talent and guiding organizational vision ensures that Penbyt remains at the forefront of our industry.",
    socialMedia: {
      linkedin: "https://linkedin.com/in/vijaykumar",
      twitter: "https://twitter.com/always_svk",
      instagram: "https://www.instagram.com/always_svk/",
    },
    portfolio: "https://alwayssvk.vercel.app",
  },
];
