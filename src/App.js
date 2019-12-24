import React from 'react';
import './App.css';
import About from './components/about';
import Divider from './components/divider';
import Expert from './components/expert';
import Learner from './components/learner';
import Home from './components/home';
import Navigation from './components/navigation';
import Preloader from './components/preloader';
import Footer from './components/footer';
import Newsletter from './components/newsletter'

function App() {
  return (
   <>
     <Preloader />
     <Home />    
     <About />
     <Divider />
     <Learner />
     <Expert />
     <Newsletter />
     <Footer />
     <Navigation />
   </>
  );
}

export default App;
