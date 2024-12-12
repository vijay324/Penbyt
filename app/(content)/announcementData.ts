export interface Announcement {
  title: string;
  description: string;
  channelLogo: string;
  subscribeUrl: string;
}

export const announcements: Announcement[] = [
  {
    title: "Todays Tech Telugu!",
    description:
      "Welcome to Todays Tech Telugu! Subscribe to our channel for the latest tech updates, Explanations, and reviews in Telugu.",
    channelLogo: "/TTT.png",
    subscribeUrl: "https://www.youtube.com/@TodaysTechTelugu",
  },
  {
    title: "Ethical Hacker Vijay",
    description:
      "Stay tuned for exclusive content on the latest Cybersecurity trends, hacking technics and upcoming technology. Subscribe now to get notified!",
    channelLogo: "/EHV.png",
    subscribeUrl: "https://www.youtube.com/@Ethicalhackervijayy",
  },
];
