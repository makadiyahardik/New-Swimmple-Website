import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add page title
    document.title = "About Us | Swimple Sports Lab";
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
                <span className="text-gradient">Bringing Sports Science</span> to Indian Swimming
              </h1>
              <p className="text-lg text-gray-700">
                Swimple is India's first swimming-focused sports science lab dedicated to improving performance through data and analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-swimple-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="/images/image7.jpg"
                    alt="Swimming pool lanes"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-swimple-blue mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Empower swimmers and coaches using analytics, precision, and innovation to unlock their full potential and elevate the standard of swimming in India.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that combining sports science with cutting-edge technology can transform swimming performance at all levels - from age group swimmers to elite competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-16 bg-swimple-gray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-swimple-blue mb-6">Why We Started</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We recognized a significant gap in swimming performance analytics in India. While other countries leverage advanced sports science for swimming, Indian swimmers lacked access to the same level of technical analysis.
                </p>
                <p className="text-lg text-gray-700">
                  Swimple was born out of a desire to bring global best practices in swimming analytics to India, making world-class technical assessment accessible to Indian swimmers and coaches.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-swimple-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Swimmer analysing technique"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Our Team</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We're a dedicated group of sports scientists, tech experts, and analysts specializing in swimming biomechanics and race dynamics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-swimple-gray/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <img 
                  src="/images/Sandeepsir.jpeg" 
                  alt="Sports scientist" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-1">Sandeep </h3>
                  {/* <p className="text-gray-600 mb-4">Sports Biomechanics Lead</p> */}
                  <p className="text-gray-700">
                  Sandeep is a seasoned entrepreneur with expertise in enterprise architecture and
                  application integration.
                  </p>
                </div>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <img 
                  src="/images/Jay.jpeg" 
                  alt="Tech expert" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-1">jay</h3>
                  {/* <p className="text-gray-600 mb-4">Technology Director</p> */}
                  <p className="text-gray-700">
                  Jay, an entrepreneur himself, has experience securing deals for his construction company
                  and has great relationships with government entities across India
                  </p>
                </div>
              </div>
              <div className="bg-swimple-gray/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <img 
                  src="/images/Pai.jpeg" 
                  alt="Swimming coach" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-swimple-blue mb-1">Raghav</h3>
                  {/* <p className="text-gray-600 mb-4">Performance Analysis Specialist</p> */}
                  <p className="text-gray-700">
                  Raghav is a strategic leader overseeing growth, analytics and financial planning for
                  Global company in the Middle-East
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-swimple-blue hover:bg-swimple-teal transition-colors">
                Meet the Full Team →
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-gradient-to-r from-swimple-blue/10 to-swimple-teal/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">What Makes Us Different?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Exclusive to Swimming</div>
                <p className="text-gray-700">
                  We focus solely on swimming, allowing for specialized expertise and equipment specific to the sport.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Coach-Friendly Feedback</div>
                <p className="text-gray-700">
                  Our reports are designed to be easily interpreted by coaches and incorporated into training plans.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-swimple-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-swimple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="text-xl font-semibold text-swimple-blue mb-2">Fully Equipped Lab</div>
                <p className="text-gray-700">
                  State-of-the-art facility with portable setups for on-site analysis at competitions and training camps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-swimple-blue mb-6">Our Location</h2>
                <p className="text-lg text-gray-700 mb-4">
                  We are proudly based at the prestigious Padukone - Dravid Centre for Sports Excellence (PDCSE) in Bangalore.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our central location allows us to serve swimmers from across the country, and we are actively working on expanding to multiple locations throughout India.
                </p>
                <div className="text-swimple-blue font-semibold text-lg">Expanding across India soon!</div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-swimple-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
                  <img
                    src="/images/image8.jpeg"
                    alt="Swimming facility"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
