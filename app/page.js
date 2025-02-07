import Navbar from './navbar/page.jsx';
import Homepage from './homepage/page.jsx'; 
import About from './about/page.jsx';  
import Services from './services/page.jsx';
import Contact from './contact/page.jsx';
import Footer from './footer/page.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />

      <Services 
      title="Email Management"
      imageUrl="/Calendar-management-800x440.webp"
      list=""
      />

      <Contact />
      <Footer />

      
    </div>
    
  );
};
