import Image from "next/image";

const HowItHelps = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white">
          How <span className="text-[#4ED634]">BULLZ.AI</span> Helps You
        </h2>

        {/* Feature Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box1.png"
              alt="AI-Powered Trade Journal"
              width={400}
              height={250}
              className="w-full"
            />
          </div>

          {/* Box 2 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box2.png"
              alt="AI-Powered Trade Suggestions"
              width={400}
              height={250}
              className="w-full"
            />
          </div>

          {/* Box 3 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box3.png"
              alt="Risk & Reward Analysis"
              width={400}
              height={250}
              className="w-full"
            />
          </div>

          {/* Box 4 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box4.png"
              alt="Historical Performance Review"
              width={400}
              height={250}
              className="w-full"
            />
          </div>

          {/* Box 5 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box5.png"
              alt="Advanced Analytics & Reports"
              width={400}
              height={250}
              className="w-full"
            />
          </div>

          {/* Box 6 */}
          <div className="flex justify-center">
            <Image
              src="/WebsiteAssets/Feature/box6.png"
              alt="AI-Created Strategies"
              width={400}
              height={250}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;