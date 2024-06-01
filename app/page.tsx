import Header from "@/app/containers/Header";
import HomeLayout from "@/app/containers/Home";
import About from "@/app/containers/About";
import Education from "@/app/containers/Education";
import Achievements from "@/app/containers/Achievements";
import Skills from "@/app/containers/Skills";
import Contact from "@/app/containers/Contact";
import Footer from "@/app/containers/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#000000" />
      </Head>
      <main className="max-w-screen overflow-x-hidden">
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
