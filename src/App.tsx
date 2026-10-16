import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <Preloader />
      <BackToTop />
      <div className="min-h-screen flex flex-col bg-[#fefcf8] text-[#3a4140] selection:bg-[#1f453f] selection:text-white">
        <Header />
        <div className="flex-1">
          <HomePage />
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
