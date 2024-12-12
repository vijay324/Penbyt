"use client";
import React, { useState, useEffect } from "react";
import type { Changelog, ChangelogEntry } from "../../../types";

const Changelog: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("");
  const [changelog, setChangelog] = useState<Changelog | null>(null);

  useEffect(() => {
    fetch("/Data/changelog.json")
      .then((response) => response.json())
      .then((data: Changelog) => {
        setChangelog(data);
        const versions = Object.keys(data.versions);
        if (versions.length > 0) {
          setSelectedVersion(versions[versions.length - 1]);
        }
      });
  }, []);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
  };

  return (
    <div className="p-2 mx-auto bg-white dark:bg-black min-h-screen transition duration-500 ease-in-out">
      <div className="flex justify-center mb-6">
        <select
          value={selectedVersion}
          onChange={handleVersionChange}
          className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-64 dark:bg-zinc-950 dark:text-white dark:border-zinc-800 transition duration-500 ease-in-out"
        >
          {changelog &&
            Object.keys(changelog.versions).map((version) => (
              <option key={version} value={version}>
                Version {version}
              </option>
            ))}
        </select>
      </div>
      <div className="bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-lg border border-zinc-200 border-hidden transition duration-500 ease-in-out">
        {changelog && changelog.versions[selectedVersion] && (
          <>
            {changelog.versions[selectedVersion].map(
              (entry: ChangelogEntry, index: number) => (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-semibold mb-1 dark:text-white">
                    {entry.title}
                  </h2>
                  <h3 className="text-lg mb-4 font-medium text-zinc-500 dark:text-zinc-300">
                    {entry.subtitle}
                  </h3>
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-auto mb-4 rounded-md"
                  />
                  <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                    {entry.description.split("\n").map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Changelog;
