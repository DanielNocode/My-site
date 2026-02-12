import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Audience from '@/components/sections/Audience';
import Services from '@/components/sections/Services';
import Cases from '@/components/sections/Cases';
import Process from '@/components/sections/Process';
import Tools from '@/components/sections/Tools';
import Testimonials from '@/components/sections/Testimonials';
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Cases />
        <Process />
        <Tools />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
