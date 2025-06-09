import React from 'react';

const impactStats = [
  { label: 'Chapters Started', value: '12+' },
  { label: 'Cans Donated', value: '1,000+' },
  { label: 'Research Projects', value: '8' },
  { label: 'Pamphlets Delivered', value: '5,000+' },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hot-text mb-6">
              Youth-powered prevention.
              <br />
              <span className="text-hot-red">Practical impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-hot-text/80 mb-12 max-w-2xl mx-auto">
              Hearts of Tomorrow is a student-led nonprofit working to prevent and fight cardiovascular disease through youth innovation and practical solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/opportunities"
                className="bg-hot-red text-white px-8 py-3 rounded-full hover:shadow-aura-hover transition-shadow duration-200"
              >
                Join Us
              </a>
              <a
                href="/about"
                className="bg-white text-hot-text border-2 border-hot-text px-8 py-3 rounded-full hover:border-hot-red hover:text-hot-red transition-colors duration-200"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-hot-text mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-aura hover:shadow-aura-hover transition-shadow duration-200 text-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-hot-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="relative">
                    <p className="text-4xl font-bold text-hot-red mb-2">{stat.value}</p>
                    <p className="text-hot-text/80">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-hot-text mb-12">Follow Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for Instagram Feed */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-hot-gray rounded-2xl overflow-hidden hover:shadow-aura transition-shadow duration-200"
              >
                <div className="w-full h-full flex items-center justify-center text-hot-text/30">
                  Instagram Post {index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/heartsoftomorrow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-hot-text hover:text-hot-red transition-colors duration-200"
            >
              Follow us on Instagram
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 