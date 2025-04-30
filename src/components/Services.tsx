
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Transforming Performance</span> Through Science
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Swimple Sports Lab, we bring sports science to the pool. Our services help swimmers of all levels improve technique and performance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group" data-aos="fade-up" data-aos-delay="0">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all border-swimple-light/30 hover:border-swimple-teal hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/1443384023/photo/ai-assisted-cyborg-athletes-in-training.jpg?s=1024x1024&w=is&k=20&c=JmfQ4Y1V72vVpQyRBrRe6L-uaIfiKb3z3SSjfMlv7SM=" 
                    alt="Race Analysis" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-2">Race Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Starts, turns, strokes, and finishes analyzed with video-supported metrics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service 2 */}
          <div className="group" data-aos="fade-up" data-aos-delay="100">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all border-swimple-light/30 hover:border-swimple-teal hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Biomechanical Analysis" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-2">Biomechanical Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Stroke mechanics evaluated using underwater footage and motion analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service 3 */}
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all border-swimple-light/30 hover:border-swimple-teal hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuZGVyd2F0ZXIlMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" 
                    alt="Underwater Camera System" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-2">Underwater Camera System</h3>
                  <p className="text-gray-600 mb-4">
                    Multi-angle, high-speed footage with detailed feedback.
                  </p>
                  <Link to="/how-it-works" className="inline-flex items-center text-sm font-medium text-swimple-blue hover:text-swimple-teal">
                    See How It Works
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
