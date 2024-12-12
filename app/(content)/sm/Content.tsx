"use client";
import { useState } from "react";
import SelectionForm from "./SelectionForm";
import SubjectTable from "./SubjectTable";
import data from "../../../public/Data/sm.json";
import { Data, Subject, Branch } from "../../../types"; // Import the Branch type

const Content: React.FC = () => {
  const [selectedData, setSelectedData] = useState<Subject[]>([]);
  const [allData] = useState<Data>(data as Data);

  const handleSearch = (query: string) => {
    if (query) {
      const results: Subject[] = [];
      for (const year in allData) {
        if (year.startsWith("Eng")) {
          // Iterate over branches within the engineering years
          for (const branch in allData[year as keyof Data] as Branch) {
            for (const sem in (allData[year as keyof Data] as Branch)[branch]) {
              const subjects = (allData[year as keyof Data] as Branch)[branch][
                sem
              ];
              if (Array.isArray(subjects)) {
                results.push(
                  ...subjects.filter((subject) =>
                    subject.subject_name
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                );
              } else {
                console.error(
                  `Expected subjects to be an array but got ${typeof subjects} for ${year} - ${branch} - ${sem}`
                );
              }
            }
          }
        } else {
          // Handle P1 and P2
          for (const sem in allData[year as keyof Data]) {
            const subjects = (allData[year as keyof Data] as any)[
              sem
            ] as Subject[];
            if (Array.isArray(subjects)) {
              results.push(
                ...subjects.filter((subject) =>
                  subject.subject_name
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
              );
            } else {
              console.error(
                `Expected subjects to be an array but got ${typeof subjects} for ${year} - ${sem}`
              );
            }
          }
        }
      }
      setSelectedData(results);
    } else {
      setSelectedData([]);
    }
  };

  const handleSubmit = ({
    year,
    semester,
    branch,
  }: {
    year: string;
    semester: string;
    branch: string;
  }) => {
    if (year && semester) {
      if (year.startsWith("Eng") && branch) {
        const selectedSubjects = (allData[year as keyof Data] as any)[branch][
          semester
        ];
        if (Array.isArray(selectedSubjects)) {
          setSelectedData(selectedSubjects);
        } else {
          console.error(
            `Expected selectedSubjects to be an array but got ${typeof selectedSubjects}`
          );
        }
      } else {
        const selectedSubjects = (allData[year as keyof Data] as any)[semester];
        if (Array.isArray(selectedSubjects)) {
          setSelectedData(selectedSubjects);
        } else {
          console.error(
            `Expected selectedSubjects to be an array but got ${typeof selectedSubjects}`
          );
        }
      }
    }
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
      <SelectionForm onSubmit={handleSubmit} onSearch={handleSearch} />
      {selectedData.length > 0 && <SubjectTable subjects={selectedData} />}
    </div>
  );
};

export default Content;
