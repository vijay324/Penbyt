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
      "Hi,👋🏻 I'm S. Vijay Kumar, Co-Founder & CTO of Penbyt. With a passion for technology and innovation, I lead our technical strategies and product development.",
    socialMedia: {
      linkedin: "https://linkedin.com/in/vijaykumar",
      twitter: "https://twitter.com/always_svk",
      instagram: "https://www.instagram.com/always_svk/",
    },
    portfolio: "https://alwayssvk.vercel.app",
  },
  {
    name: "Sunil",
    title: "CEO & HR",
    image: "/sunil.svg",
    description:
      "Sunil leads our team with a focus on HR and strategy. His expertise in managing talent and guiding organizational vision ensures that Penbyt remains at the forefront of our industry.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/bayikati-sunil-3b6759280",
      twitter: "https://x.com/wisemensiddhu/",
      instagram: "https://www.instagram.com/wise_men_siddhu/",
    },
    portfolio: "https://sunilportfolio.com",
  },
  // Uncomment and add more team members here if needed
  // {
  //   name: "Anita",
  //   title: "Chief Content Officer",
  //   image: "/anita.svg",
  //   description: "Anita oversees all content strategy and development.",
  //   socialMedia: {
  //     linkedin: "https://linkedin.com/in/anita",
  //     twitter: "https://twitter.com/anita",
  //   },
  //   portfolio: "https://anitaportfolio.com",
  // },
];
