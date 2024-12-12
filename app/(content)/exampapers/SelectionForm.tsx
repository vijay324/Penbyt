"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useTheme } from "../../components/ThemeContext"; // Adjust the import path as needed
import { useAnimate, stagger, motion } from "framer-motion";

interface Props {
  onSubmit: (data: { year: string; semester: string; branch: string }) => void;
  onSearch: (query: string) => void;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Animate form elements
    animate(
      ".input-field, .select-field, .submit-button",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

const SelectionForm: React.FC<Props> = ({ onSubmit, onSearch }) => {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true); // Default to true for testing
  const { isDarkMode } = useTheme(); // Use the theme context

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setBranch(""); // Reset branch when year changes
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ year, semester, branch });
  };

  const scope = useMenuAnimation(isOpen);

  const containerClasses = `${
    isDarkMode
      ? "bg-zinc-950 border-zinc-900 text-zinc-400"
      : "bg-white border-zinc-300 text-zinc-700"
  }`;
  const inputClasses = `${
    isDarkMode
      ? "bg-zinc-900 border-zinc-600 text-white"
      : "bg-white border-zinc-300 text-black"
  }`;
  const buttonClasses = `${
    isDarkMode
      ? "border-purple-800 bg-purple-900 text-purple-200"
      : "border-purple-950 bg-purple-100 text-purple-600"
  }`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`p-4 border rounded-[20px] shadow-md ${containerClasses}`}
      ref={scope}
      initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    >
      <h2 className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
        Find Exam Papers by searching the name of the subject. ( OR ) by
        selecting the below columns.
      </h2>

      <div className="flex flex-col md:flex-row items-center mb-4">
        <motion.div className="mb-4 md:mb-0 md:mr-4 flex-1 relative">
          <motion.div className="relative">
            <motion.input
              id="search"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className={`input-field w-full p-2 border rounded-[8px] ${inputClasses}`}
              placeholder="Enter subject name..."
            />
          </motion.div>
        </motion.div>
        <motion.div className="mb-4 md:mb-0 md:mr-4 flex-1 relative">
          <motion.div className="relative">
            <motion.select
              id="year"
              value={year}
              onChange={handleYearChange}
              className={`select-field w-full p-2 border rounded-[8px] ${inputClasses}`}
            >
              <option value="">Select Year</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="Eng1">Engineering-1</option>
              <option value="Eng2">Engineering-2</option>
              <option value="Eng3">Engineering-3</option>
              <option value="Eng4">Engineering-4</option>
            </motion.select>
          </motion.div>
        </motion.div>
        <motion.div className="mb-4 md:mb-0 md:mr-4 flex-1">
          <motion.select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className={`select-field w-full p-2 border rounded-[8px] ${inputClasses}`}
          >
            <option value="">Select Semester</option>
            <option value="sem-1">Semester 1</option>
            <option value="sem-2">Semester 2</option>
          </motion.select>
        </motion.div>
        {year.startsWith("Eng") && (
          <motion.div className="flex-1">
            <motion.select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className={`select-field w-full p-2 border rounded-[8px] ${inputClasses}`}
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Mech">Mech</option>
              <option value="Civil">Civil</option>
              <option value="Chemical">Chemical</option>
              <option value="MME">MME</option>
            </motion.select>
          </motion.div>
        )}
      </div>
      <motion.button
        type="submit"
        className={`submit-button w-full p-2 rounded-[12px] font-semibold transition-colors ${buttonClasses}`}
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default SelectionForm;
