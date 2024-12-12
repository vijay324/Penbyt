import { useState, useEffect } from "react";

// Define the prop types for FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// FAQItem component definition
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        onClick={onClick}
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 transition-all duration-300 ease-in-out">
          <p className="text-gray-600 dark:text-zinc-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Define the type for the FAQ list
interface FAQ {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How can I access the e-PDF study materials I purchased?",
      answer:
        "After completing your purchase, you will receive an email with a download link for your e-PDF study materials. You can also access your purchased materials by logging into your account on our website and navigating to the 'My Downloads' section.",
    },
    {
      question:
        "What should I do if I have trouble downloading or opening the e-PDF files?",
      answer:
        "If you encounter issues with downloading or opening e-PDF files, ensure that you have a PDF reader installed on your device. If problems persist, please contact our support team through the 'Help' section of our website for further assistance.",
    },
    {
      question: "Can I print the e-PDF study materials I purchased?",
      answer:
        "Yes, you can print the e-PDF study materials for personal use. Please ensure that you adhere to our usage terms and conditions, which prohibit redistribution or commercial use of the printed materials.",
    },
    {
      question: "How do I update my account information?",
      answer:
        "To update your account information, log in to your account on our website and navigate to the 'Account Settings' section. Here, you can update your personal details, email address, and password.",
    },
    {
      question: "What should I do if I forgot my account password?",
      answer:
        "If you forgot your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password using the email address associated with your account.",
    },
    {
      question: "How can I contact customer support for additional help?",
      answer:
        "For additional help, you can contact our customer support team through the 'Help' section on our website. You can also reach us via email at support@penbyt.com or by calling our customer service hotline.",
    },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Randomly select an FAQ index to open on component mount
    const randomIndex = Math.floor(Math.random() * faqs.length);
    setOpenIndex(randomIndex);
  }, [faqs.length]);

  const handleClick = (index: number) => {
    // Toggle the clicked FAQ item, ensuring only one is open at a time
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            FAQ
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Frequently Asked Questions
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 mb-8 md:mb-0">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
