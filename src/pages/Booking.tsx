
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Check, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("race");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add page title
    document.title = "Book a Session | Swimple Sports Lab";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!name || !email || !serviceType || !date || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Form is valid, proceed to next step
    setStep(2);
    setIsSubmitting(false);
  };

  const handlePayment = () => {
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      toast({
        title: "Booking Successful!",
        description: "Your session has been booked. Check your email for confirmation.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-swimple-blue/10 to-swimple-teal/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Book Your Swim Analysis Session</span>
              </h1>
              <p className="text-lg text-gray-700">
                Schedule your race or biomechanical analysis and take the first step toward improved performance.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-swimple-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <div className={`h-1 w-24 ${step >= 2 ? 'bg-swimple-blue' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-swimple-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                  <div className={`h-1 w-24 ${step >= 3 ? 'bg-swimple-blue' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-swimple-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                    3
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="text-sm text-gray-600 w-24 text-center">Details</div>
                  <div className="text-sm text-gray-600 w-24 text-center mx-5">Payment</div>
                  <div className="text-sm text-gray-600 w-24 text-center">Confirmation</div>
                </div>
              </div>

              {/* Step 1: Booking Form */}
              {step === 1 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number (optional)</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                    
                    <div>
                      <Label>Type of Service *</Label>
                      <RadioGroup value={serviceType} onValueChange={setServiceType} className="flex flex-col space-y-1 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="race" id="race" />
                          <Label htmlFor="race" className="cursor-pointer">Race Analysis</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="biomechanical" id="biomechanical" />
                          <Label htmlFor="biomechanical" className="cursor-pointer">Biomechanical Analysis</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both" className="cursor-pointer">Both</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Preferred Date *</Label>
                        <div className="mt-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      
                      <div>
                        <Label>Preferred Time *</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={timeSlot === slot ? "default" : "outline"}
                              className={`text-sm ${timeSlot === slot ? 'bg-swimple-blue' : ''}`}
                              onClick={() => setTimeSlot(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea 
                        id="notes" 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)} 
                        placeholder="Any specific concerns or requests" 
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="bg-swimple-blue hover:bg-swimple-teal w-full md:w-auto px-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Continue to Payment"}
                    </Button>
                  </div>
                </form>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="bg-swimple-gray/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">
                          {serviceType === 'race' ? 'Race Analysis' : 
                          serviceType === 'biomechanical' ? 'Biomechanical Analysis' : 
                          'Race & Biomechanical Analysis'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">{date && format(date, "PPP")} at {timeSlot}</span>
                      </div>
                      <div className="border-t border-gray-200 my-3"></div>
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-swimple-blue">
                          {serviceType === 'both' ? '₹5,999' : '₹3,499'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Payment Method</h3>
                    
                    <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-swimple-blue" />
                      <div className="flex-1">
                        <p className="font-medium">Credit / Debit Card</p>
                        <p className="text-sm text-gray-500">Pay securely with your card</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-swimple-blue flex items-center justify-center bg-swimple-blue">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input id="nameOnCard" placeholder="Name as it appears on card" />
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button 
                        onClick={handlePayment} 
                        className="bg-swimple-blue hover:bg-swimple-teal w-full md:w-auto px-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing Payment..." : "Complete Booking"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
                  
                  <div className="max-w-md mx-auto text-left bg-swimple-gray/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">Your Session Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">
                          {serviceType === 'race' ? 'Race Analysis' : 
                          serviceType === 'biomechanical' ? 'Biomechanical Analysis' : 
                          'Race & Biomechanical Analysis'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">{date && format(date, "PPP")} at {timeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">PDCSE, Bangalore</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Booking ID:</span>
                        <span className="font-medium">SWP-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 max-w-md mx-auto">
                    A confirmation email has been sent to <span className="font-medium">{email}</span> with your booking details and instructions for your session.
                  </p>
                  
                  <div className="pt-4">
                    <Button className="bg-swimple-blue hover:bg-swimple-teal" onClick={() => window.location.href = '/'}>
                      Return to Home
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
