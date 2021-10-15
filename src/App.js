import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import './App.css';
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from './components/Navbar';
import Content from "./components/Content";
import SlideContent from "./components/SlideContent";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

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
