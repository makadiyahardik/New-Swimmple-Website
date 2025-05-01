import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add page title
    document.title = "How It Works | Swimple Sports Lab";
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
                <span className="text-gradient">From Pool to Performance Insights</span> — Here's How
              </h1>
              <p className="text-lg text-gray-700">
                Our streamlined process makes it easy to get the insights you need to improve your swimming.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-swimple-blue flex items-center justify-center text-white text-4xl font-bold">1</div>
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-swimple-teal rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-swimple-blue mb-4">Book Session</h2>
                  <p className="text-gray-700 mb-4">
                    Schedule your analysis session through our online booking system or via WhatsApp. Choose the type of analysis you need and select your preferred date and time.
                  </p>
                  <Link to="/">
                    <Button className="bg-swimple-blue hover:bg-swimple-teal transition-colors">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-swimple-blue to-swimple-teal mx-auto -mt-10 mb-10"></div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-swimple-blue flex items-center justify-center text-white text-4xl font-bold">2</div>
                    <div className="absolute -left-2 -top-2 w-8 h-8 bg-swimple-teal rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-swimple-blue mb-4">Swim Normally</h2>
                  <p className="text-gray-700">
                    When you arrive for your session, our team will handle all the camera setup. You simply swim as you normally would, following the guidance of our technicians. There's zero disruption to your regular swimming technique.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-swimple-blue to-swimple-teal mx-auto -mt-10 mb-10"></div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-swimple-blue flex items-center justify-center text-white text-4xl font-bold">3</div>
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-swimple-teal rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-swimple-blue mb-4">Data Analysis</h2>
                  <p className="text-gray-700">
                    Our expert team analyzes every aspect of your swimming performance including stroke technique, tempo, turns, starts, and propulsion. We use sophisticated software to extract meaningful insights from your session.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-swimple-blue to-swimple-teal mx-auto -mt-10 mb-10"></div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-swimple-blue flex items-center justify-center text-white text-4xl font-bold">4</div>
                    <div className="absolute -left-2 -top-2 w-8 h-8 bg-swimple-teal rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-swimple-blue mb-4">Receive Personalized Report</h2>
                  <p className="text-gray-700">
                    Within 48 hours, you'll receive a comprehensive personalized report with video clips, metrics, suggested drills, and detailed notes. The report is designed to be easy to understand and actionable for both swimmers and coaches.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-swimple-blue to-swimple-teal mx-auto -mt-10 mb-10"></div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-swimple-blue flex items-center justify-center text-white text-4xl font-bold">5</div>
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-swimple-teal rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-swimple-blue mb-4">Take Action</h2>
                  <p className="text-gray-700 mb-4">
                    Implement the recommendations in your training routine and see the improvements in your performance. We're also available for follow-up questions and can recommend follow-up sessions to track your progress over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-swimple-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Frequently Asked Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Everything you need to know about our swimming analysis services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md mb-4 border-none">
                  <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-swimple-blue hover:no-underline">
                    How long does a session take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    A typical session lasts about 45-60 minutes, including setup time and the actual swimming analysis.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md mb-4 border-none">
                  <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-swimple-blue hover:no-underline">
                    Do I need to be an elite swimmer to benefit?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    Not at all! Our services benefit swimmers of all levels, from beginners looking to improve their technique to elite competitors fine-tuning their performance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md mb-4 border-none">
                  <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-swimple-blue hover:no-underline">
                    Can my coach attend the session?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    Yes, we encourage coaches to attend. Their input is valuable, and it helps them understand how to implement the recommendations in training.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md mb-4 border-none">
                  <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-swimple-blue hover:no-underline">
                    How often should I get analyzed?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    We recommend analysis every 3-6 months to track progress and make continuous improvements. However, this can vary based on your goals and competition schedule.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Swimple Difference?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book your session today and take the first step toward data-driven swimming improvement.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-swimple-blue hover:bg-swimple-teal text-white px-8 py-6 rounded-md transition-all hover:translate-y-[-2px]">
                Book Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
