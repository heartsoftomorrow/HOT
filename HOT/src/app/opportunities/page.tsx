import React from 'react';

const volunteerRoles = [
  {
    icon: '📈',
    title: 'Fundraiser',
    description: 'Lead donation campaigns and organize fundraising events for cardiovascular health initiatives.',
    skillLevel: 'Beginner',
  },
  {
    icon: '🧪',
    title: 'Research Assistant',
    description: 'Support ongoing research projects and help analyze data on cardiovascular health trends.',
    skillLevel: 'Intermediate',
  },
  {
    icon: '🖼️',
    title: 'Infographic Designer',
    description: 'Create engaging visual content to educate communities about heart health.',
    skillLevel: 'Beginner',
  },
  {
    icon: '🥫',
    title: 'Canned Food Drive Organizer',
    description: 'Coordinate food collection drives and manage distribution to communities in need.',
    skillLevel: 'Beginner',
  },
  {
    icon: '💬',
    title: 'App Beta Tester',
    description: 'Test and provide feedback on our digital health tools and applications.',
    skillLevel: 'Beginner',
  },
  {
    icon: '🌎',
    title: 'Chapter Leader',
    description: 'Start and manage a Hearts of Tomorrow chapter in your local community.',
    skillLevel: 'Intermediate',
  },
];

export default function OpportunitiesPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-hot-text mb-6">Make an Impact Today</h1>
            <p className="text-lg text-hot-text/80 mb-8">
              Join our mission to prevent cardiovascular disease. Find the perfect role that matches your skills and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Options */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white text-hot-text hover:text-hot-red transition-colors duration-200 shadow-aura hover:shadow-aura-hover">
              All Roles
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-hot-text hover:text-hot-red transition-colors duration-200">
              Beginner
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-hot-text hover:text-hot-red transition-colors duration-200">
              Intermediate
            </button>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-aura hover:shadow-aura-hover transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold text-hot-text mb-2">{role.title}</h3>
                <p className="text-hot-text/80 mb-4">{role.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-hot-text/60">{role.skillLevel}</span>
                  <a
                    href={`/apply?role=${encodeURIComponent(role.title)}`}
                    className="text-hot-red hover:text-hot-red-light transition-colors duration-200 flex items-center"
                  >
                    Apply
                    <svg
                      className="ml-2 w-4 h-4"
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
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-hot-text mb-6">Not Sure Where to Start?</h2>
            <p className="text-lg text-hot-text/80 mb-8">
              Contact us and we'll help you find the perfect role based on your interests and availability.
            </p>
            <a
              href="mailto:volunteer@heartsoftomorrow.org"
              className="inline-block bg-hot-red text-white px-8 py-3 rounded-full hover:shadow-aura-hover transition-shadow duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 