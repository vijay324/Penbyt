import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

type Policy = {
  smalltitle: string;
  title: string;
  subtitle: string;
};

type Policies = {
  [key: string]: Policy[];
};

type PolicyPageProps = {
  policy: string;
  content: Policy[];
  error?: string;
};

// Fetch policies from the JSON file
const getPolicies = (): Policies => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "Data",
      "policies.json"
    );
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading policies.json file:", error);
    return {};
  }
};

// Generate static paths
export const generateStaticParams = () => {
  const policies = getPolicies();
  return Object.keys(policies).map((policy) => ({ policy }));
};

// The PolicyPage component
const PolicyPage = async ({
  params,
}: {
  params: Promise<{ policy: string }>;
}) => {
  // Await `params` to extract `policy`
  const { policy } = await params;

  const policies = getPolicies();
  const policyContent = policies[policy];

  if (!policyContent) {
    notFound();
  }

  return (
    <div className="p-4 text-center bg-white dark:bg-black">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="h-[15rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.06] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-6xl capitalize font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-200 pt-9 pb-4">
            {policy.replace("-", " ")}
          </p>
        </div>
        {policyContent.map((content, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-zinc-200 mb-4">
              {content.title}
            </h2>
            <h6 className="text-xl sm:text-xl font-bold text-black dark:text-zinc-300 mb-4">
              {content.smalltitle}
            </h6>
            <p className="text-lg sm:text-xl text-black dark:text-zinc-400">
              {content.subtitle}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-2xl font-semibold mb-2 dark:text-zinc-200">Help</h4>
        <p className="mb-2 dark:text-zinc-300">
          If you have any questions contact us at{" "}
          <Link href="/contact" className="text-blue-600 underline">
            Help center
          </Link>{" "}
          ( or )
          <Link href="mailto:team@penbyt.com" className="text-blue-600">
            team@penbyt.com
          </Link>
        </p>
        <p className="flex items-center border bg-green-100 text-green-700 dark:bg-transparent dark:text-green-400 border-green-400 px-4 py-2 mt-4 rounded-xl text-xs">
          <strong>Last update: November 04, 2024</strong>
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
