import Navbar from './navbar/page.jsx';
import Homepage from './homepage/page.jsx'; 
import About from './about/page.jsx';
import Mywork from './mywork/page.jsx';
import Contact from './contact/page.jsx';
import Footer from './footer/page.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
    
  );
};
