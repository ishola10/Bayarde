import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto py-12 px-6">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-600 font-grace">About us</span>{" "}
          <span className="text-gray-900 font-inter">Find top-  <br /> tier professionals</span>
        </h2>
        <p className="text-gray-600 mt-4 w-2/3 text-xs md:text-sm">
          Founded in 2023 in Texas, USA, Bayarde Services is a premier staffing
          and recruiting firm specializing in Supply Chain, Technology, and
          Technical Skills.
        </p>

        <div className="mt-6 p-4 border-l-4 border-orange-400 bg-gray-100 rounded-lg">
          <p className="italic text-gray-700 mb-10">
            “We enable businesses to scale efficiently while ensuring workforce
            agility in an evolving global market.”
          </p>
          <p className="mt-2 text-gray-500 font-medium">
            — Adebayo Adeleke, CEO AALLC
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden">
          <Image
            src="/images/9c633105-e30c-41a2-8732-bdc3a0bab76e (1).jpg"
            alt="Bayarde CEO"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
