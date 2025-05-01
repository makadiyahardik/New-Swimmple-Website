import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinMovement = () => {
  return (
    <section className="py-16 bg-swimple-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Be part of the revolution in Indian swimming performance analytics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="bg-white hover:bg-swimple-light text-swimple-blue px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
              Book a Session
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-white hover:bg-swimple-light text-swimple-blue px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement; 