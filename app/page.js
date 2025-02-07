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
  ]

  return (
    <div>
      <Navbar />
      <Homepage />
      <About />

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

      <Contact />
      <Footer />

      
    </div>
    
  );
};
