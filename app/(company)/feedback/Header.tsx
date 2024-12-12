export default function Header() {
  return (
    <div className="h-[15rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.06] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 text-center">
        <p className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-700 pt-9 pb-2">
          Feedback
        </p>
        <p className="font-medium mb-2 text-zinc-500">
          We value your insights and would greatly appreciate your feedback to
          help us enhance our services.
        </p>
      </div>
    </div>
  );
}
