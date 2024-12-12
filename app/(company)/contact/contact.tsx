"use client";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionError, setSubmissionError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Restore form data from local storage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      const { name, email, subject, message, acceptedTerms } =
        JSON.parse(savedData);
      setName(name || "");
      setEmail(email || "");
      setSubject(subject || "");
      setMessage(message || "");
      setAcceptedTerms(acceptedTerms || false);
    }
  }, []);

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem(
      "contactFormData",
      JSON.stringify({ name, email, subject, message, acceptedTerms })
    );
  }, [name, email, subject, message, acceptedTerms]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showSuccess && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setShowSuccess(false);
      setSubmitted(false); // Reset form visibility after countdown
      // Clear form data
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setAcceptedTerms(false);
      // Remove saved data from local storage
      localStorage.removeItem("contactFormData");
    }

    return () => clearInterval(timer);
  }, [showSuccess, countdown]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";
    if (!acceptedTerms)
      newErrors.acceptedTerms = "You must accept the terms and conditions";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("../../api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      setIsLoading(false);

      if (response.ok) {
        setSubmitted(true);
        setShowSuccess(true);
        setCountdown(10); // Reset countdown
      } else {
        throw new Error("Failed to submit contact form");
      }
    } catch (error) {
      setIsLoading(false);
      setSubmissionError(
        "There was an error submitting your contact form. Please try again later."
      );
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });

    if (field === "name") setName(value as string);
    if (field === "email") setEmail(value as string);
    if (field === "subject") setSubject(value as string);
    if (field === "message") setMessage(value as string);
    if (field === "acceptedTerms") setAcceptedTerms(value as boolean);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-black">
      {submitted && showSuccess ? (
        <div className="flex flex-col items-center justify-center p-4">
          <div className="bg-green-100 border-2 border-green-600 border-dashed p-6 rounded-3xl max-w-md w-full text-center relative">
            <h1 className="text-2xl text-green-600">
              Thank you for contacting us!
            </h1>
            <p className="text-lg text-green-600">
              We will get back to you shortly.
            </p>
            <p className="text-lg text-green-600">
              {countdown > 0 ? `Redirecting in ${countdown} seconds...` : null}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white dark:bg-zinc-950 rounded-3xl shadow-md p-8">
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
            {/* <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Get in Touch
            </h2> */}
            <p className="mb-4 dark:text-zinc-300">
              Whether you have a question about our study materials, need
              assistance, or want to share anything else, we're here to help.
              Reach out to us anytime!
            </p>
            <div>
              <p className="dark:text-white">
                <Link
                  href="mailto:help@penbyt.com"
                  className="text-blue-600 font-semibold"
                >
                  Help@penbyt.com
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            {submissionError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-red-500 mb-4"
              >
                {submissionError}
              </motion.p>
            )}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col md:flex-row md:space-x-4 mb-4">
                <label className="mb-2 w-full md:mb-0">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-[1.5px] p-3 pl-4 w-full rounded-3xl dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:border-purple-500"
                    placeholder="Name"
                  />
                </label>
              </div>
              {errors.name && (
                <p className="flex bg-red-100 text-red-700 border border-red-400 w-40 px-4 py-0 rounded mb-4 text-sm self-start">
                  {errors.name}
                </p>
              )}
              <label className="mb-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-[1.5px] p-3 pl-4 mb-4 w-full rounded-3xl dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:border-purple-500"
                  placeholder="Email"
                />
              </label>
              {errors.email && (
                <p className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 w-40 text-sm self-start">
                  {errors.email}
                </p>
              )}
              <label className="mb-2 w-full">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="border-[1.5px] p-3 pl-4 mb-4 w-full rounded-3xl dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:border-purple-500"
                  placeholder="Subject"
                />
              </label>
              {errors.subject && (
                <p className="flex flex-col bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm w-40 self-start">
                  {errors.subject}
                </p>
              )}
              <label className="mb-2 w-full">
                <textarea
                  value={message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="border-[1.5px] p-3 pl-4 mb-4 w-full h-32 rounded-3xl dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:border-purple-500"
                  placeholder="Message"
                />
              </label>
              {errors.message && (
                <p className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm w-40 self-start">
                  {errors.message}
                </p>
              )}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) =>
                    handleInputChange("acceptedTerms", e.target.checked)
                  }
                  className="custom-checkbox mr-2 dark:bg-black"
                />
                <span className="dark:text-white">
                  I accept the{" "}
                  <Link href="/terms-and-conditions" className="text-blue-600">
                    terms and conditions
                  </Link>
                </span>
              </div>
              {errors.acceptedTerms && (
                <p className="flex bg-red-100 text-red-700 border border-red-400 px-4 py-0 rounded mb-4 text-sm w-40 self-start">
                  {errors.acceptedTerms}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className={`bg-purple-500 text-white px-4 py-2 rounded-3xl hover:bg-purple-600 focus:outline-none ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Typewriter
                    words={["Sending..."]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                ) : (
                  "Send message"
                )}
              </motion.button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
