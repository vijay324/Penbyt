"use client";
import React, { useState, useEffect, KeyboardEvent } from "react";
import Skeleton from "./Skeleton";

interface Intern {
  name: string;
  uid: string;
  type: string;
  duration: string;
  badge: string;
  rating: string;
  status: "completed" | "working";
}

const InternDetails: React.FC<{ intern: Intern }> = ({ intern }) => {
  const bgColor =
    intern.status === "working"
      ? "bg-yellow-100 dark:bg-yellow-900"
      : "bg-green-100 dark:bg-green-900";
  const textColor =
    intern.status === "working" ? "bg-yellow-500" : "bg-green-500";

  return (
    <div className={`${bgColor} p-4 rounded-lg shadow-md`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          {intern.name}
        </h2>
        <span
          className={`${textColor} text-white text-xs font-semibold px-2 py-1 rounded`}
        >
          {intern.status === "working" ? "Working" : "Completed"}
        </span>
      </div>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">SID: {intern.uid}</p>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Role: {intern.type}
      </p>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Duration: {intern.duration}
      </p>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Rating: {intern.rating}
      </p>
    </div>
  );
};

const HomePage: React.FC = () => {
  const [uid, setUid] = useState("");
  const [intern, setIntern] = useState<Intern | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [interns, setInterns] = useState<Intern[]>([]);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const res = await fetch("/Data/interns.json");
        if (!res.ok) {
          throw new Error("Failed to fetch interns");
        }
        const internsData: Intern[] = await res.json();
        const updatedInterns: Intern[] = internsData.map((intern) => ({
          ...intern,
          status: intern.badge.toLowerCase().includes("working")
            ? "working"
            : "completed",
        }));
        setInterns(updatedInterns);
      } catch (error) {
        console.error("Error fetching interns:", error);
      }
    };
    fetchInterns();
  }, []);

  const handleSearch = () => {
    if (!uid.trim()) return;
    setLoading(true);
    const foundIntern = interns.find(
      (intern) => intern.uid.toLowerCase() === uid.toLowerCase()
    );
    setTimeout(() => {
      setIntern(foundIntern || null);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black flex flex-col items-center justify-center">
      <div className="bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-xl font-bold mb-1 text-center text-zinc-900 dark:text-zinc-100">
          {" "}
          Confirm Your Internship Certification{" "}
        </h1>{" "}
        <h2 className="text-sm font-medium mb-6 text-center text-zinc-500 dark:text-zinc-500">
          {" "}
          Review Your Current Internship Status and Certification Details{" "}
        </h2>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Enter Internship ID"
            value={uid}
            onChange={(e) => {
              setUid(e.target.value);
              setSearched(false);
            }}
            onKeyDown={handleKeyDown}
            className="p-3 border rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-900"
            aria-label="Enter UID"
          />
          <button
            onClick={handleSearch}
            className="p-3 bg-purple-400 text-white rounded-r-lg hover:bg-purple-600"
          >
            Search
          </button>
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          searched &&
          (intern ? (
            <InternDetails intern={intern} />
          ) : (
            <p className="text-red-500">No records found with UID {uid}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
