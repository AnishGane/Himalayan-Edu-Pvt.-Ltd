import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <section>
      <div className="h-screen">
        <Navbar />
      </div>
      <div className="h-screen bg-red-200">Hello</div>
    </section>
  );
};

export default Home;
