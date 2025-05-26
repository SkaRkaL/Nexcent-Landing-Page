import NavBar from "./components/NavBar";
import HeroSection from "./components/Home/HeroSection";
import Clients from "./components/Home/Clients";
import Community from "./components/Home/Community";
import Unlock from "./components/Body/Unlock";
import Calender from "./components/Body/Calender";
import Achievements from "./components/Body/Achievements";
import Customer from "./components/Body/Customer's";
import Footer from "./components/Body/Footer";
import BlogSection from "./components/Body/Community";


export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <main>
        <HeroSection />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calender />
        <BlogSection />
        <Customer />
        <Footer />
      </main>
    </div>
  );
}
