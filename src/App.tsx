import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import {
  Home,
  About,
  Services,
  Team,
  Contact,
  Query
} from './sections';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white dark:from-navy-900 dark:to-navy-800 min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      
      <main>
        <Home />
        <About />
        <Services />
        <Team />
        <Contact />
        <Query />
      </main>
    </div>
  );
}

export default App;