import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="mx-auto px-4 py-16 dark:bg-zinc-950 bg-white dark:text-white text-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6 dark:text-zinc-400 text-zinc-600">
            Our mission is to provide high-quality study materials and resources
            to students around the world, enabling them to achieve academic
            success and personal growth.
          </p>
          <p className="text-lg mb-6 dark:text-zinc-400 text-zinc-600">
            We believe in the power of education to transform lives and are
            dedicated to creating a supportive and enriching learning
            environment for all our users.
          </p>
          <p className="text-lg dark:text-zinc-400 text-zinc-600">
            Join us in our mission to make education accessible and enjoyable
            for everyone. Together, we can achieve great things.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:justify-end space-y-4 lg:items-end">
          <div>
            <h3 className="text-4xl font-bold">15K+</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              Resources available
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              Students benefitting
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              New users annually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
