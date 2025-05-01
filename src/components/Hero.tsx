
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background with wave effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-swimple-blue/10 to-swimple-teal/10 wave-animation z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              <span className="text-gradient">India's First</span> Sports Science Lab for Swimming
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Race analysis and biomechanical precision powered by underwater cameras and cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link to="/booking">
                <Button size="lg" className="bg-swimple-blue hover:bg-swimple-teal text-white px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
                  Book a Session
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-swimple-blue text-swimple-blue hover:bg-swimple-blue/10 px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="lg:w-1/2 relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-swimple-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-swimple-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1664478030972-29159a001af8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Professional swimmer in action" 
                className="rounded-lg shadow-2xl relative z-10 object-cover w-full max-h-96 lg:max-h-[500px]"
              />
              <div className="absolute -right-4 bottom-4 bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg z-20 max-w-[200px] border border-swimple-light/50">
                <div className="text-sm font-medium text-swimple-blue">Race Analysis</div>
                <div className="mt-1 text-xs text-gray-600">Multi-angle underwater footage with detailed metrics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
