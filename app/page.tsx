import Header from "./components/Header";
import HomeLayout from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeLayout />
      <About />
      <Education />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
