import React from 'react';

const WhatIDo: React.FC = () => {
  return (
    <section id="work" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-400">
              I build responsive and performant websites using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-400">
              I design user-friendly interfaces that are both aesthetically pleasing and easy to use. I focus on creating a seamless user experience.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <p className="text-gray-400">
              I have experience with Node.js, Express, and databases like PostgreSQL and MongoDB to build robust and scalable server-side applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
