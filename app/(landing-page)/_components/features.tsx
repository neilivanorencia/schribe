import { Besley, Inter } from "next/font/google";
import Image from "next/image";

const besley = Besley({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const Features = () => {
  return (
    <div className="mx-auto max-w-6xl pt-16">
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Features;
