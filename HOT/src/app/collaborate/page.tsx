import React from 'react';

const partnerTypes = [
  {
    icon: '🏥',
    title: 'Medical Institutions',
    description: 'Partner with hospitals and clinics to provide resources and expertise for our initiatives.',
  },
  {
    icon: '🤝',
    title: 'Local Nonprofits',
    description: 'Collaborate with organizations that share our mission of improving community health.',
  },
  {
    icon: '🎨',
    title: 'Designers & Researchers',
    description: 'Work with professionals to create impactful educational materials and conduct studies.',
  },
  {
    icon: '🏫',
    title: 'Schools & Student Orgs',
    description: 'Join forces with educational institutions to expand our reach and impact.',
  },
];

const currentPartners = [
  'City General Hospital',
  'Health First Foundation',
  'Community Care Alliance',
  'Tech for Good Initiative',
  'Youth Health Network',
  'Design for Change Studio',
];

export default function CollaboratePage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-hot-text mb-6">Partner With Us</h1>
            <p className="text-lg text-hot-text/80 mb-8">
              Join our network of partners working together to prevent cardiovascular disease and create lasting impact in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-hot-text mb-12">Who We Collaborate With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-aura hover:shadow-aura-hover transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-hot-text mb-2">{type.title}</h3>
                <p className="text-hot-text/80">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-hot-text mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="aspect-square bg-hot-gray rounded-2xl flex items-center justify-center p-6 group hover:shadow-aura transition-shadow duration-200"
              >
                <span className="text-hot-text text-center group-hover:text-hot-red transition-colors duration-200">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-hot-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-aura">
              <h2 className="text-3xl font-bold text-hot-text mb-8 text-center">Start a Collaboration</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hot-text mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hot-red/20 focus:border-hot-red"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hot-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hot-red/20 focus:border-hot-red"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-hot-text mb-2">
                    Partnership Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hot-red/20 focus:border-hot-red"
                  >
                    <option value="">Select a partnership type</option>
                    {partnerTypes.map((type, index) => (
                      <option key={index} value={type.title}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-hot-text mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hot-red/20 focus:border-hot-red"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-hot-red text-white px-8 py-3 rounded-full hover:shadow-aura-hover transition-shadow duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 