//SubjectTable.tsx
"use client";
import { Subject } from "../../../types";
import {
  formatDistanceToNow,
  parseISO,
  isValid as isValidDate,
} from "date-fns";
import { useTheme } from "../../components/ThemeContext"; // Adjust the path
import { motion } from "framer-motion";

interface Props {
  subjects: Subject[];
}

const SubjectTable: React.FC<Props> = ({ subjects }) => {
  const { isDarkMode } = useTheme();

  // Check if all subjects have invalid last_updated_date
  const allInvalidDates = subjects.every(
    (subject) => !isValidDate(parseISO(subject.last_updated_date))
  );

  // Check if subjects array is empty
  const noSubjectsFound = subjects.length === 0;

  // If all dates are invalid or no subjects found, show the not found card
  if (allInvalidDates || noSubjectsFound) {
    return (
      <div className="rounded-[20px] shadow-md mt-8">
        <motion.div
          className={`rounded-[20px] shadow-md border p-4 text-center ${
            isDarkMode
              ? "bg-zinc-950 border-zinc-700 text-white"
              : "bg-white border-zinc-300 text-black"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-600 font-semibold">
            Content not found.{" "}
            <a
              href="/report-problem"
              className={`font-light underline ${
                isDarkMode ? "text-blue-300" : "text-blue-600"
              }`}
            >
              Request a content
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  // Otherwise, render the table with valid subjects
  return (
    <motion.div
      className="rounded-[20px] shadow-md mt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`rounded-[20px] shadow-md border overflow-hidden ${
          isDarkMode
            ? "bg-zinc-950 border-zinc-700"
            : "bg-white border-zinc-300"
        }`}
      >
        <div className="overflow-x-auto">
          <table
            className={`min-w-full ${isDarkMode ? "bg-zinc-950" : "bg-white"}`}
          >
            <thead>
              <tr className={isDarkMode ? "bg-zinc-900" : "bg-zinc-50"}>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  Subject Name
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              {subjects.map((subject, index) => (
                <motion.tr
                  key={index}
                  className={`border-t ${
                    isDarkMode
                      ? "bg-zinc-950 border-zinc-700 hover:bg-zinc-700"
                      : "bg-white border-zinc-200 hover:bg-zinc-100"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-semibold ${
                      subject.URL ? "text-green-600" : "text-red-600"
                    } cursor-pointer`}
                  >
                    {subject.URL ? (
                      <a
                        href={subject.URL}
                        className={`hover:underline ${
                          subject.URL ? "text-green-600" : "text-red-600"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subject.subject_name}
                      </a>
                    ) : (
                      subject.subject_name
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isValidDate(parseISO(subject.last_updated_date))
                      ? formatDistanceToNow(
                          parseISO(subject.last_updated_date),
                          { addSuffix: true }
                        )
                      : "Invalid Date"}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 m-3">
        <p className="text-[12px]">
          If the{" "}
          <span className="text-green-600 text-[14px] font-semibold">
            SUBJECT NAME
          </span>{" "}
          it means Available.
        </p>
        <p className="text-[12px]">
          If the{" "}
          <span className="text-red-600 text-[14px] font-semibold">
            SUBJECT NAME
          </span>{" "}
          it means Unavailable.
        </p>
      </div>
    </motion.div>
  );
};

export default SubjectTable;
