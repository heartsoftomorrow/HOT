import React from 'react';

const workAreas = [
  {
    icon: '🫀',
    title: 'Donation Drives',
    description: 'Organizing community-wide initiatives to collect essential resources for those in need.',
  },
  {
    icon: '📚',
    title: 'Pamphlet Design',
    description: 'Creating accessible, informative materials to educate communities about heart health.',
  },
  {
    icon: '🧬',
    title: 'Research & App Building',
    description: 'Developing innovative digital solutions and conducting student-led research projects.',
  },
  {
    icon: '🌍',
    title: 'Chapter Expansion',
    description: 'Growing our network of passionate youth leaders across different communities.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-hot-text mb-8">Our Mission</h1>
            <p className="text-xl text-hot-text/80 mb-8">
              Hearts of Tomorrow empowers youth to fight cardiovascular disease with research, education, and real-world care.
            </p>
            <div className="w-20 h-1 bg-hot-red mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hot-text mb-6">Our Story</h2>
              <div className="space-y-4 text-hot-text/80">
                <p>
                  Hearts of Tomorrow began with a simple observation: while cardiovascular disease affects millions, prevention often takes a backseat to treatment. We saw an opportunity to make a difference through youth-led innovation and practical solutions.
                </p>
                <p>
                  What sets us apart is our focus on accessibility and student ingenuity. We believe that young minds, equipped with the right tools and motivation, can create meaningful change in their communities.
                </p>
                <p>
                  Today, we're a growing network of passionate students working together to prevent cardiovascular disease through education, research, and direct community action.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-aura">
              <div className="aspect-video bg-hot-gray rounded-xl flex items-center justify-center text-hot-text/30">
                Story Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-hot-text mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-aura hover:shadow-aura-hover transition-shadow duration-200 text-center group"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-hot-text mb-2">{area.title}</h3>
                <p className="text-hot-text/80">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hot-text mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-hot-text/80 mb-8 max-w-2xl mx-auto">
            Join our mission to prevent cardiovascular disease through youth innovation and practical solutions.
          </p>
          <a
            href="/opportunities"
            className="inline-block bg-hot-red text-white px-8 py-3 rounded-full hover:shadow-aura-hover transition-shadow duration-200"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
} 