import Header from "./components/Header";
import HomeLayout from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#000000" />
      </Head>
      <main className="max-w-screen overflow-hidden">
        <Header />
        <HomeLayout />
        <About />
        <Education />
        <Achievements />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
