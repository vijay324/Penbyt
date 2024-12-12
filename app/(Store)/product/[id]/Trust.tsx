import { FaTruck, FaUndo, FaHeadset, FaLock } from "react-icons/fa";

const Trust = () => {
  const features = [
    {
      icon: <FaTruck className="text-purple-600 text-3xl" />,
      title: "Instant Delivery",
      description:
        "You will receive your products instantly in your submitted email.",
    },
    {
      icon: <FaUndo className="text-purple-600 text-3xl" />,
      title: "Instant Return Policy",
      description:
        "If you are not satisfied with the product, your money will be returned within 7 working days",
    },
    {
      icon: <FaHeadset className="text-purple-600 text-3xl" />,
      title: "Quick Support System",
      description:
        "Your problem will be solved within 24 hours of contacting us.",
    },
    {
      icon: <FaLock className="text-purple-600 text-3xl" />,
      title: "Secure Payment Way",
      description: "100% secure payments.",
    },
  ];

  return (
    <div>
      {/* Mobile and tablet layout */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 bg-purple-50 p-4 sm:p-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-purple-100 dark:bg-zinc-950 p-3">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex justify-between items-start bg-purple-50  dark:bg-zinc-950 p-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-1/4 px-4"
          >
            <div className="mb-4 rounded-full bg-purple-100 dark:bg-zinc-900 p-3">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800  dark:text-zinc-400">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-zinc-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
