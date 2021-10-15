import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import './App.css';
import React, { Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

// Improve first contentful paint in React
const Feature = lazy(() => import ('./components/Feature'));
const Intro = lazy(() => import ('./components/Intro'));
const Content = lazy(() => import ('./components/Content'));
const SlideContent = lazy(() => import ('./components/SlideContent'));
const JoinUs = lazy(() => import ('./components/JoinUs'));

function App() {
  return (
    <>
      <Navbar />
            
      <div className="mb-5 mt-2">
      <Intro />
      <Feature />
      <Content />
      <SlideContent />
      <JoinUs />
      </div>

      <Footer />
    </>
  );
}

export default App;
