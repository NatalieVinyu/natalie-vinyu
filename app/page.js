import Navbar from './navbar/page.jsx';
import Homepage from './homepage/page.jsx'; 
import About from './about/page.jsx';  
import Services from './services/page.jsx';
import Contact from './contact/page.jsx';
import Footer from './footer/page.jsx';

export default function Home() {
  const servicesList1 = [
    "Email management",
    "Scheduling Assistance",
    "Document Handling"
  ];

  const servicesList2 = [
    "1",
    "2",
    "3",
    "4"
  ];

  const servicesList3 = [
    "Flights Bookings & Accommodation",
    "Car Rentals",
    "Business Trip Scheduling",
    "Personalized Itineraries"
  ];

  return (
    <div>
      <Navbar />
      <Homepage />
      <About />

      {/* Services Section - Grid Layout */}
      <section id="services" className="container mx-auto pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Services 
            title="Email Management"
            imageUrl="/Calendar-management-800x440.webp"
            list={servicesList1}
          />
          <Services
            title="Administrative"
            imageUrl="/Calendar-management-800x440.webp" 
            list={servicesList2}
          />
          <Services
            title="Travel Management"
            imageUrl="/Calendar-management-800x440.webp" 
            list={servicesList3}
          />
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

