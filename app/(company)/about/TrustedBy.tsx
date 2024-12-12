import Image from "next/image";

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold tracking-wide uppercase text-zinc-600 dark:text-zinc-300">
          Trusted by the world’s most innovative teams
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center">
          <Image src="/logo.svg" alt="Transistor" width={120} height={120} />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src="/logo.svg" alt="Reform" width={120} height={120} />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src="/logo.svg" alt="Tuple" width={120} height={120} />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src="/logo.svg" alt="SavvyCal" width={120} height={120} />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src="/logo.svg" alt="Statamic" width={120} height={120} />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
