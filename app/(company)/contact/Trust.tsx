import { FaHeadset, FaLock, FaCommentDots, FaDiscord } from "react-icons/fa";
import Link from "next/link"; // Import Link from next

const Trust = () => {
  const features = [
    {
      icon: (
        <FaCommentDots className="text-purple-600 dark:text-purple-400 text-3xl" />
      ), // Feedback icon
      title: "Feedback",
      description: "Share your feedback with us.",
      link: "/feedback", // Link to the Feedback page
    },
    {
      icon: (
        <FaDiscord className="text-purple-600 dark:text-purple-400 text-3xl" />
      ), // Discord icon
      title: "Join Our Discord",
      description: "Join our community for support and updates.",
      link: "https://discord.com/your-community-link", // Replace with your actual Discord link
    },
    {
      icon: (
        <FaLock className="text-purple-600 dark:text-purple-400 text-3xl" />
      ),
      title: "Privacy & Security",
      description: "Learn how we protect your data.",
      link: "/privacy", // Link to the Privacy & Security page
    },
    {
      icon: (
        <FaHeadset className="text-purple-600 dark:text-purple-400 text-3xl" />
      ),
      title: "Customer Support",
      description: "We are here to help you write a message above.",
      link: "#", // Link to the Customer Support page
    },
  ];

  return (
    <div>
      {/* Mobile and tablet layout */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 bg-zinc-50 dark:bg-zinc-900 p-4 sm:p-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.link ? (
              <Link
                href={feature.link}
                passHref
                className="flex flex-col items-center"
              >
                <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Link>
            ) : (
              <div>
                <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex justify-between items-start bg-zinc-50 dark:bg-zinc-950 p-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-1/4 px-4"
          >
            {feature.link ? (
              <Link
                href={feature.link}
                passHref
                className="flex flex-col items-center"
              >
                <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-900 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Link>
            ) : (
              <div>
                <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-900 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
