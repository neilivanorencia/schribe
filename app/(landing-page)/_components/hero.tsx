import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex items-center justify-center lg:flex-1">
      <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
        <Image
          src="/hero-light.svg"
          fill
          className="object-contain"
          alt="Hero Image"
          priority
        />
      </div>
    </div>
  );
};
