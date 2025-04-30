
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-swimple-blue to-swimple-teal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-[30%] translate-y-[30%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Swimming to the Next Level?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Join elite swimmers across India who are transforming their performance with our science-backed analysis and personalized insights.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white hover:bg-swimple-light text-swimple-blue px-8 py-6 rounded-md transition-all hover:translate-y-[-2px] hover:shadow-lg">
              Book a Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
