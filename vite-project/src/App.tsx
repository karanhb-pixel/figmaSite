import { lazy, Suspense } from 'react';
import './App.css';


const Testimonys = lazy(() => import('./components/Testimonys.jsx'));
const Courses = lazy(() => import('./components/Courses.jsx'));
const Getourapp = lazy(() => import('./components/Getourapp.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

import Navbar from './components/Navbar.jsx';
import Hero_Section from './components/Hero_Section.jsx';


const LoadingFallback = () => (
  <div className="container" style={{ minHeight: '50vh', justifyContent: 'center', alignItems: 'center' }}>
    <p>Loading Content...</p>
  </div>
);


function App() {
  return (
    <main className="wrapper">
      <Navbar />
      <Hero_Section />
      <Suspense fallback={<LoadingFallback />}>
        <Testimonys />
        <Courses />
        <Getourapp />
        <Footer />
      </Suspense>

    </main>
  );
}

export default App;