import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <div className='container'>
        <Hero />
        <Skill />
        <WorkExperience />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
}

export default App;
