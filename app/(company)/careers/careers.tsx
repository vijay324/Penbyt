import { useState } from "react";

const CareersPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [githubKnowledge, setGithubKnowledge] = useState<string>("");
  const [yearOfStudy, setYearOfStudy] = useState<string>("");
  const [resume, setResume] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionError, setSubmissionError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!position) newErrors.position = "Position is required";
    if (!githubKnowledge)
      newErrors.githubKnowledge = "GitHub knowledge is required";
    if (!yearOfStudy) newErrors.yearOfStudy = "Year of study is required";
    if (!resume) newErrors.resume = "Resume is required";
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
      const response = await fetch("../../api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          position,
          githubKnowledge,
          yearOfStudy,
          resume,
          portfolio,
          additionalInfo,
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      setIsLoading(false);
      setSubmissionError(
        "There was an error submitting your application. Please try again later."
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="bg-green-100 border-2 border-green-600 dark:bg-transparent border-dashed p-6 rounded-xl max-w-md w-full text-center relative">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl text-green-500 font-semibold dark:text-green-500">
              Application Received
            </h1>
          </div>
          <p className="text-lg text-green-600 dark:text-green-400">
            Thank you for your interest in our internship program. We have
            received your application and will review it shortly. Our team will
            be in touch with you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-auto p-4 md:p-8 bg-white dark:bg-black rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 dark:text-zinc-400">
        React.js Internship Program
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Join our dynamic team and take the next step in your career journey with
        us!
      </p>
      {submissionError && (
        <p className="text-red-500 mb-4 dark:text-red-400">{submissionError}</p>
      )}
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="border border-zinc-300 rounded p-2 mt-1 w-full dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
          {errors.name && (
            <p className="text-red-500 dark:text-red-400">{errors.name}</p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="border border-zinc-300 rounded p-2 mt-1 w-full dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
          {errors.email && (
            <p className="text-red-500 dark:text-red-400">{errors.email}</p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">
            Phone Number:
          </span>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
            className="border border-zinc-300 rounded p-2 mt-1 w-full dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 dark:text-red-400">
              {errors.phoneNumber}
            </p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">Position:</span>
          <div className="flex flex-col mt-1">
            <label className="flex items-center mb-2 dark:text-zinc-400">
              <input
                type="radio"
                value="Web Development"
                checked={position === "Web Development"}
                onChange={(e) => setPosition(e.target.value)}
                className="mr-2"
              />
              Web Development
            </label>
            <label className="flex items-center mb-2 dark:text-zinc-400">
              <input
                type="radio"
                value="Cyber Security"
                checked={position === "Cyber Security"}
                onChange={(e) => setPosition(e.target.value)}
                className="mr-2"
              />
              Cyber Security
            </label>
            <label className="flex items-center mb-2 dark:text-zinc-400">
              <input
                type="radio"
                value="App Development"
                checked={position === "App Development"}
                onChange={(e) => setPosition(e.target.value)}
                className="mr-2"
              />
              App Development
            </label>
          </div>
          {errors.position && (
            <p className="text-red-500 dark:text-red-400">{errors.position}</p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">
            Do you know GitHub?:
          </span>
          <div className="flex items-center mt-1">
            <label className="mr-4 dark:text-zinc-400">
              <input
                type="radio"
                value="yes"
                checked={githubKnowledge === "yes"}
                onChange={(e) => setGithubKnowledge(e.target.value)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="dark:text-zinc-400">
              <input
                type="radio"
                value="no"
                checked={githubKnowledge === "no"}
                onChange={(e) => setGithubKnowledge(e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.githubKnowledge && (
            <p className="text-red-500 dark:text-red-400">
              {errors.githubKnowledge}
            </p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">
            Year of Study:
          </span>
          <select
            value={yearOfStudy}
            onChange={(e) => setYearOfStudy(e.target.value)}
            required
            className="border border-zinc-300 rounded p-2 mt-1 w-full dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          >
            <option value="" disabled>
              Select your year of study
            </option>
            <option value="p1">P1</option>
            <option value="p2">P2</option>
            <option value="cse">CSE</option>
            <option value="eee">EEE</option>
            <option value="ece">ECE</option>
            <option value="mech">MECH</option>
            <option value="civil">CIVIL</option>
            <option value="mme">MME</option>
            <option value="chemical">CHEMICAL</option>
          </select>
          {errors.yearOfStudy && (
            <p className="text-red-500 dark:text-red-400">
              {errors.yearOfStudy}
            </p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">Resume:</span>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here"
            required
            className="border border-zinc-300 rounded p-2 mt-1 w-full h-20 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
          {errors.resume && (
            <p className="text-red-500 dark:text-red-400">{errors.resume}</p>
          )}
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">
            Portfolio (optional):
          </span>
          <input
            type="url"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="Enter your portfolio URL"
            className="border border-zinc-300 rounded p-2 mt-1 w-full dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-zinc-700 dark:text-zinc-300">
            Additional Information (optional):
          </span>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Enter any additional information here"
            className="border border-zinc-300 rounded p-2 mt-1 w-full h-20 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
        </label>
        <button
          type="submit"
          className={`bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 ${
            isLoading ? "opacity-100 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Applying..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
};

export default CareersPage;
