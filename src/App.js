import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import JobAttributed from './components/JobAttributed';
import Service_Intro from './components/Service_Intro';
import Service_Type from './components/Service_Type';
import Started from './components/Started';
import TeamMember from './components/TeamMember';
import Sumary from './components/Sumary';
import Project from './components/Project';
import Subcribe from './components/Subcribe';
import Discuss from './components/Discuss';
import Testimonials from './components/Testimonials';
import Shareholder from './components/Shareholder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Slideshow from './components/slider';

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Welcome />
      <JobAttributed />
      <div className="service">
        <Service_Intro />
        <Service_Type />
      </div>
      <Started />
      <TeamMember />
      <Sumary />
      <Project/>
      <Subcribe/>
      <Discuss />
      {/* <Testimonials/> */}
      <Slideshow/>
      <Shareholder/>
      <Contact/>
      <Footer/>
      <GoToTop />
      
    </>
    
  )  
}

export default App;
