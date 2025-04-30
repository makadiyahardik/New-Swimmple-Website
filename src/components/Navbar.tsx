
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-swimple-blue">
            <span className="text-gradient">Swimple</span>
            <span className="text-sm ml-1 text-gray-600">Sports Lab</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-swimple-blue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-swimple-blue transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-swimple-blue transition-colors">
            About Us
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-swimple-blue transition-colors">
            How It Works
          </Link>
          <Link to="/booking">
            <Button className="bg-swimple-blue hover:bg-swimple-teal transition-colors">
              Book a Session
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-gray-700 hover:text-swimple-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-swimple-blue transition-colors px-4 py-2 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-swimple-blue transition-colors px-4 py-2 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-swimple-blue transition-colors px-4 py-2 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-swimple-blue transition-colors px-4 py-2 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-swimple-blue hover:bg-swimple-teal transition-colors w-full">
                Book a Session
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
