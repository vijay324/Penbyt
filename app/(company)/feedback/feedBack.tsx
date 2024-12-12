"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "./data";
import { motion } from "framer-motion";

const FeedbackPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionError, setSubmissionError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 0 && !name) newErrors.name = "Name is required";
    if (currentStep === 1 && !email) newErrors.email = "Email is required";
    if (
      currentStep > 1 &&
      currentStep <= questions.length + 1 &&
      !answers[currentStep - 2]
    ) {
      newErrors.answers = "Please select an option";
    }
    return newErrors;
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("../../api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, answers, comments }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      setSubmissionError(
        "There was an error submitting your feedback. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    if (currentStep < questions.length + 2) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="bg-green-100 border-2 border-green-600 border-dashed p-6 rounded-xl max-w-md w-full text-center relative">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl text-green-600">
              Thank you for your feedback!
            </h1>
          </div>
          <p className="text-lg text-green-600">
            We appreciate your input and will use it to improve our resources
            and services. If you have any further comments or questions, feel
            free to reach out to us.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen dark:bg-dark dark:text-white">
        <p className="text-purple-500 text-2xl">Submitting Data...</p>
        <div className="w-11/12 md:w-1/2 p-4">
          <div className="bg-zinc-300 dark:bg-dark-700 h-10 w-full mb-4 animate-pulse"></div>
          <div className="bg-zinc-300 dark:bg-dark-700 h-10 w-full mb-4 animate-pulse"></div>
          <div className="bg-zinc-300 dark:bg-dark-700 h-10 w-1/2 mb-4 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 dark:bg-dark dark:text-white">
      {submissionError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm self-start"
        >
          {submissionError}
        </motion.p>
      )}

      {currentStep === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full md:w-1/2"
        >
          <label className="mb-2 w-full">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-2 text-xl text-zinc-500 dark:bg-black placeholder-zinc-300 border-b-2 border-zinc-300 focus:outline-none focus:border-purple-500 transition-colors duration-300 dark:bg-dark-700 dark:border-zinc-600 dark:text-white"
            />
          </label>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm self-start"
            >
              {errors.name}
            </motion.p>
          )}
          <div className="flex justify-between w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBack}
              className="bg-zinc-300 border-solid border-zinc-400 border-2 dark:bg-dark-300 text-black px-4 py-2 rounded-xl mt-4"
              disabled={currentStep === 0}
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-purple-500 dark:bg-purple-700 text-white px-4 py-2 rounded-xl mt-4"
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      )}

      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full md:w-1/2"
        >
          <label className="mb-2 w-full">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-2 text-xl text-zinc-500 dark:bg-black placeholder-zinc-300 border-b-2 border-zinc-300 focus:outline-none focus:border-purple-500 transition-colors duration-300"
            />
          </label>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm self-start"
            >
              {errors.email}
            </motion.p>
          )}
          <div className="flex justify-between w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBack}
              className="bg-zinc-300 border-solid border-zinc-400 border-2 dark:bg-dark-300 text-black px-4 py-2 rounded-xl mt-4"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-purple-500 dark:bg-purple-700 text-white px-4 py-2 rounded-xl mt-4"
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      )}

      {currentStep > 1 && currentStep <= questions.length + 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full md:w-1/2 p-4"
        >
          <p className="mb-4 text-4xl font-semibold text-zinc-700 dark:text-zinc-200">
            {questions[currentStep - 2].question}
          </p>
          <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400 self-start">
            Choose one of the below
          </p>
          <div className="flex flex-col w-full">
            {questions[currentStep - 2].options.map((option, index) => (
              <label key={index} className="mb-2 flex items-center">
                <input
                  type="radio"
                  name={`question-${currentStep - 2}`}
                  value={option}
                  checked={answers[currentStep - 2] === option}
                  onChange={(e) =>
                    handleAnswerChange(currentStep - 2, e.target.value)
                  }
                  className="mr-2 appearance-none w-5 h-5 border-2 border-purple-300 rounded-md checked:bg-purple-600 checked:border-purple-600 dark:bg-dark-700 dark:border-zinc-600"
                />
                <span
                  className={`flex-1 border-purple-300 border-2 dark:bg-dark-800 text-zinc-700 dark:text-zinc-200 py-2 px-4 rounded-xl ${
                    answers[currentStep - 2] === option
                      ? "bg-purple-600 text-white border-hidden"
                      : ""
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>

          {errors.answers && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm self-start"
            >
              {errors.answers}
            </motion.p>
          )}
          <div className="flex justify-between w-full mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBack}
              className="bg-zinc-300 border-solid border-zinc-400 border-2 text-black px-4 py-2 rounded-xl"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-purple-500 dark:bg-purple-700 text-white px-4 py-2 rounded-xl"
            >
              {currentStep < questions.length + 1 ? "Next" : "Submit"}
            </motion.button>
          </div>
        </motion.div>
      )}

      {currentStep === questions.length + 2 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full md:w-1/2"
        >
          <label className="mb-2 w-full">
            <textarea
              value={comments}
              placeholder="Any other comments"
              onChange={(e) => setComments(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-2 text-xl text-zinc-500 dark:bg-black placeholder-zinc-300 border-b-2 border-zinc-300 focus:outline-none focus:border-purple-500 transition-colors duration-300 dark:bg-dark-700 dark:border-zinc-600 dark:text-white"
            />
          </label>
          <div className="flex justify-between w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBack}
              className="bg-zinc-500 dark:bg-dark-700 text-white px-4 py-2 rounded-xl mt-4"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-purple-500 dark:bg-purple-700 text-white px-4 py-2 rounded-xl mt-4"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FeedbackPage;
