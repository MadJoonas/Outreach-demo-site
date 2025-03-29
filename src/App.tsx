import React, { useState } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Clock, MapPin, Mail } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {/* Header with Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-4 px-6 border-b border-gold/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <div className="font-rowdies text-3xl font-bold text-white opacity-70">MAD BBQ</div>
            <div className="font-bebas text-xs tracking-wider text-gold">RESTAURANT & CATERING</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            <a href="#menu" className="font-bebas text-xl tracking-wide text-[#A52A2A] hover:text-gold transition-colors menu-item">MENU</a>
            <a href="#catering" className="font-bebas text-xl tracking-wide text-[#A52A2A] hover:text-gold transition-colors menu-item">CATERING SERVICES</a>
            <a href="#gallery" className="font-bebas text-xl tracking-wide text-[#A52A2A] hover:text-gold transition-colors menu-item">GALLERY</a>
            <a href="#events" className="font-bebas text-xl tracking-wide text-[#A52A2A] hover:text-gold transition-colors menu-item">EVENTS & BOOKINGS</a>
            <a href="#contact" className="font-bebas text-xl tracking-wide text-[#A52A2A] hover:text-gold transition-colors menu-item">CONTACT US</a>
          </nav>
          
          <div className="hidden lg:flex items-center">
            <Phone size={20} className="text-gold mr-2" />
            <a href="tel:+15551234567" className="font-bebas text-xl tracking-widest text-gold">(555) 123-4567</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gold hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 pt-24 px-6 lg:hidden">
          <nav className="flex flex-col space-y-6 text-center font-bebas text-2xl tracking-wide">
            <a href="#menu" onClick={toggleMobileMenu} className="text-[#A52A2A] hover:text-gold py-2 border-b border-gold/20">MENU</a>
            <a href="#catering" onClick={toggleMobileMenu} className="text-[#A52A2A] hover:text-gold py-2 border-b border-gold/20">CATERING SERVICES</a>
            <a href="#gallery" onClick={toggleMobileMenu} className="text-[#A52A2A] hover:text-gold py-2 border-b border-gold/20">GALLERY</a>
            <a href="#events" onClick={toggleMobileMenu} className="text-[#A52A2A] hover:text-gold py-2 border-b border-gold/20">EVENTS & BOOKINGS</a>
            <a href="#contact" onClick={toggleMobileMenu} className="text-[#A52A2A] hover:text-gold py-2 border-b border-gold/20">CONTACT US</a>
            <div className="flex items-center justify-center py-2">
              <Phone size={20} className="text-gold mr-2" />
              <a href="tel:+15551234567" className="text-gold tracking-widest">(555) 123-4567</a>
            </div>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="BBQ platter with smoked meats" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center pt-28 items-center px-4 container mx-auto">
          <div className="fade-in text-center w-full max-w-4xl mx-auto opacity-90">
            <h1 className="font-chunkfive text-5xl md:text-7xl font-bold mb-8 tracking-normal opacity-90">
              Authentic BBQ & Catering, <span className="text-gold opacity-95">Crafted with Passion.</span>
            </h1>
            <p className="font-bebas text-xl md:text-2xl mb-10 mx-auto max-w-3xl tracking-wide letter-spacing-1 text-gray-200 opacity-90">
              SERVING THE BEST SMOKED MEATS & GRILLED DELIGHTS IN TOWN
            </p>
            <div className="flex justify-center">
              <button className="gold-button px-6 py-3 rounded-sm font-bebas text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BBQ Experience Section */}
      <section className="py-24 px-6 bg-texture bg-charcoal">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our BBQ Experience</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              At MAD BBQ, we take pride in our authentic smoking techniques and premium ingredients. 
              Each cut of meat is carefully selected, seasoned with our signature rubs, and slow-smoked 
              to perfection over locally sourced hardwoods.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The result is tender, flavorful BBQ that captures the essence of traditional 
              American barbecue with our unique MAD twist. From our mouthwatering ribs to our 
              perfectly smoked brisket, every dish tells a story of passion, patience, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Catering Services Section */}
      <section id="catering" className="py-24 px-6 bg-dark-bg">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">Catering Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-charcoal p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gold">Corporate Events</h3>
              <p className="text-gray-300 leading-relaxed">
                Impress your clients and colleagues with our premium corporate catering. 
                From business lunches to company celebrations, we deliver exceptional food 
                and service tailored to your specific needs and budget.
              </p>
            </div>
            <div className="bg-charcoal p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gold">Weddings</h3>
              <p className="text-gray-300 leading-relaxed">
                Make your special day unforgettable with our gourmet BBQ catering. 
                We offer customized menus and professional service to match your wedding vision,
                creating a unique dining experience your guests will rave about.
              </p>
            </div>
            <div className="bg-charcoal p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gold">Private Parties</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether it's a backyard gathering, birthday, or anniversary, let us handle 
                the food so you can enjoy your celebration with guests. Our team ensures 
                a seamless experience from setup to cleanup.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="gold-button px-8 py-4 rounded-sm font-bebas text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition">
              Request Catering Quote
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-texture bg-charcoal">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">Our Signature Dishes</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Smoked Brisket" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-2xl font-playfair font-bold text-gold">Smoked Brisket</p>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="BBQ Ribs" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-2xl font-playfair font-bold text-gold">BBQ Ribs</p>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="BBQ Platter" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-2xl font-playfair font-bold text-gold">Signature BBQ Platter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-dark-bg">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-charcoal p-8 rounded-sm border border-gold/20">
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "The brisket at MAD BBQ is the best I've ever had. Perfectly smoked, tender, and full of flavor.
                The catering service for our wedding was exceptional and our guests are still talking about it months later!"
              </p>
              <p className="text-gold font-semibold">— Sarah & Tom</p>
            </div>
            <div className="bg-charcoal p-8 rounded-sm border border-gold/20">
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Our corporate event was a hit thanks to MAD BBQ's amazing food. The ribs and pulled pork
                were a crowd favorite, and the service was impeccable. Will definitely be using them again."
              </p>
              <p className="text-gold font-semibold">— John D., Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Bookings Section */}
      <section id="events" className="py-24 px-6 bg-texture bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">Events & Bookings</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Host your next event at MAD BBQ. Our venue offers the perfect atmosphere for birthdays,
              anniversaries, corporate gatherings, and special celebrations. Our team will work with you
              to create a custom menu and experience that meets your specific needs.
            </p>
            <button className="gold-button px-8 py-4 rounded-sm font-bebas text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-dark-bg">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-center">Contact & Hours</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-8 text-gold">Find Us</h3>
              <div className="flex items-start mb-6">
                <MapPin className="text-gold mr-4 flex-shrink-0" size={24} />
                <p className="text-gray-300">123 Smoke Street, BBQ City, TX 12345</p>
              </div>
              <div className="flex items-start mb-6">
                <Phone className="text-gold mr-4 flex-shrink-0" size={24} />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-start mb-6">
                <Mail className="text-gold mr-4 flex-shrink-0" size={24} />
                <p className="text-gray-300">info@madbbq.com</p>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-gold hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-gold hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={28} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-8 text-gold">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-300 py-2 border-b border-gold/20">Monday - Thursday</div>
                <div className="text-white py-2 border-b border-gold/20 font-medium">11:00 AM - 9:00 PM</div>
                
                <div className="text-gray-300 py-2 border-b border-gold/20">Friday - Saturday</div>
                <div className="text-white py-2 border-b border-gold/20 font-medium">11:00 AM - 10:00 PM</div>
                
                <div className="text-gray-300 py-2 border-b border-gold/20">Sunday</div>
                <div className="text-white py-2 border-b border-gold/20 font-medium">12:00 PM - 8:00 PM</div>
              </div>
              <div className="mt-10">
                <button className="gold-button px-8 py-4 rounded-sm font-bebas text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition w-full">
                  MAKE A RESERVATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col">
                <div className="font-rowdies text-2xl font-bold text-white mb-1 opacity-70">MAD BBQ</div>
                <div className="font-bebas text-xs tracking-wider text-gold">RESTAURANT & CATERING</div>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} MAD BBQ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;