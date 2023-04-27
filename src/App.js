import Home from "./Components/Home";
import Header from "./Components/Header";
// import About from "./Components/About";
import Services from "./Components/Services";
import Appp from "./Components/Appp";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* <About /> */}
        <Services />
        <Appp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
