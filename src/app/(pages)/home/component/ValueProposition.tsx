import React from "react";
import Image from "next/image";


const ValueProposition = () => {
  const features = [
    {
      title: "Built on Google Cloud",
      description: "Sourcing top professionals worldwide",
    },
    {
      title: "Customized Staffing Solutions",
      description: "Flexible hiring models tailored to your business needs",
    },
    {
      title: "Industry Expertise",
      description: "Industry specific recruitment strategies",
    },
    {
      title: "Technology Driven Solutions",
      description: "Leveraging AI and talent technology for top-tier recruitment",
    },
    {
      title: "Commitment to Excellence",
      description: "Flexible hiring models tailored to your business needs",
    },
  ];

  return (
    <div className="bg-[#F9F1EC] py-16 px-8 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-12">
        <div className="flex justify-center">
          <Image
            src="/images/statues.png"
            alt="Business Model"
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Unique Business Model <br /> Value Proposition
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/icons/google-cloud-platform-small.svg fill.png"
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;