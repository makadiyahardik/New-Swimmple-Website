
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add page title
    document.title = "Our Services | Swimple Sports Lab";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-swimple-blue/10 to-swimple-teal/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Precision Analysis,</span> Personalized for Every Swimmer
              </h1>
              <p className="text-lg text-gray-700">
                Using cutting-edge tech + sports science to help swimmers achieve personal bests and podium finishes.
              </p>
            </div>
          </div>
        </section>

        {/* Race Analysis */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-swimple-blue mb-6">Race Analysis: <span className="text-gray-700 font-normal">Unlock Every Split-Second</span></h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Frame-by-frame video analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Stroke count, tempo, and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Turn time, start reaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Elite benchmark comparison</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Ideal for competitive swimmers</span>
                  </li>
                </ul>
              
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-swimple-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="/images/image6.jpg"
                    alt="Race Analysis"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biomechanical Analysis */}
        <section className="py-16 bg-swimple-gray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-swimple-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Biomechanical Analysis"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-swimple-blue mb-6">Biomechanical Analysis: <span className="text-gray-700 font-normal">Master the Mechanics</span></h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Joint angles, propulsion, stroke phase</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Multi-angle footage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Injury risk identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Custom drills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Useful for all levels, from age-group to elite</span>
                  </li>
                </ul>
         
              </div>
            </div>
          </div>
        </section>

        {/* Underwater Camera Technology */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Underwater Camera Technology:</span> See What the Eye Can't Catch
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our advanced camera system provides insights that are impossible to capture with the naked eye.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-swimple-gray/30 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-swimple-blue mb-2">HD Quality</div>
                <p className="text-gray-700">
                  Synchronized HD underwater & above-water cameras capture every detail.
                </p>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-swimple-blue mb-2">Slow Motion</div>
                <p className="text-gray-700">
                  Detailed slow motion playback allows for frame-by-frame analysis.
                </p>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-swimple-blue mb-2">Measurable Data</div>
                <p className="text-gray-700">
                  Consistent, accurate measurements for tracking progress over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Reports */}
        <section className="py-16 bg-gradient-to-r from-swimple-blue/10 to-swimple-teal/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gradient">Personalized Reports</span> Delivered Post-Session
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Visual breakdowns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Key metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Actionable takeaways</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-swimple-teal flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-gray-700">Coach collaboration</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" className="border-swimple-blue text-swimple-blue hover:bg-swimple-blue/10">
                    See Sample Report →
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-swimple-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Personalized Reports"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Who This Is For</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our services are designed to benefit swimmers at every level and those who support them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-swimple-gray/30 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Competitive Swimmers</div>
                <p className="text-gray-700">
                  Gain the edge needed for podium finishes and personal records.
                </p>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Coaches</div>
                <p className="text-gray-700">
                  Enhance your coaching with scientific data and visual evidence.
                </p>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Parents</div>
                <p className="text-gray-700">
                  Support your child's swimming journey with expert insights.
                </p>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Triathletes & Masters</div>
                <p className="text-gray-700">
                  Improve swimming efficiency for better race times and enjoyment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-swimple-blue text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Swimming?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward data-driven performance improvement.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-white hover:bg-swimple-light text-swimple-blue px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
                Book Your Session Today
              </Button>
            </Link>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
