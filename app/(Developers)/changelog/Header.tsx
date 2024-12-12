export default function Header() {
  return (
    <div className="h-[15rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.06] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-6xl capitalize font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-200 pt-9 pb-4">
        Changelog
      </p>
    </div>
  );
}
