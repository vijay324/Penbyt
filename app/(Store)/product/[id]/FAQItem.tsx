import { useState } from "react";

// Define the prop types for FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        onClick={() => setIsOpen(!isOpen)}
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
          <p className="text-gray-600 dark:text-gray-400">{answer}</p>
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
      question: "What is your return policy?",
      answer:
        "We offer a 48-hour return policy for all our products. If you are not satisfied with our course or product, simply contact us within this period, and we will process your refund without any questions.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Once your payment is completed, you will receive the purchased product immediately at the email address you provided.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-zinc-950">
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
