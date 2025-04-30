
import React from "react";
import { Check } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      id: 1,
      text: "First-of-its-kind in India",
    },
    {
      id: 2,
      text: "Sports science & tech-powered",
    },
    {
      id: 3,
      text: "Personalized reports & insights",
    },
    {
      id: 4,
      text: "Trusted by elite swimmers and coaches",
    },
  ];

  return (
    <section className="bg-swimple-gray py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left side image */}
          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-swimple-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-swimple-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle" style={{animationDelay: '1.5s'}}></div>
              <img
                src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Swimming data analysis"
                className="rounded-lg shadow-xl relative z-10 object-cover w-full h-full max-h-[500px]"
              />
              <div className="absolute top-4 -right-4 bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg max-w-[200px] border border-swimple-light/50 z-20">
                <div className="text-sm font-medium text-swimple-blue">Data-Driven</div>
                <div className="mt-1 text-xs text-gray-600">Scientific approach to swim improvement</div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Why</span> Swimple?
            </h2>
            <div className="mt-8 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-swimple-blue text-white">
                      <Check size={16} />
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-gray-700">{benefit.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-gray-600">
              <p>
                Our cutting-edge technology and scientific methodology provide insights that were previously unavailable to swimmers in India. We're changing how swimmers train, improve, and compete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
