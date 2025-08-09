import { navItems } from "@/data/navs-items";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";
import { FloatingNav } from "./components/ui/floating-navbar";

export default function Home() {
  return (
    <main  className="bg-white dark:bg-black flex justify-center items-center mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Testimonials/>
        <Contact/>
      </div>
    </main>
  );
}
