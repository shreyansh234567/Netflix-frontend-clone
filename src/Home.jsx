import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrendingNow from './components/TrendingNow.jsx';
import MoreReasons from './components/MoreReasons.jsx';
import FAQSection from './components/FAQSection.jsx';
import EmailCTA from './components/EmailCTA.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrendingNow />
      <MoreReasons />
      <FAQSection />
      <EmailCTA />
      <Footer />
    </main>
  );
}
