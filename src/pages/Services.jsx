import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Youth Programs",
      description: "Engaging young minds in heart health education and innovation through workshops, competitions, and mentorship programs.",
      icon: "👥"
    },
    {
      title: "Prevention Initiatives",
      description: "Comprehensive programs focused on lifestyle changes, early detection, and risk factor management.",
      icon: "🎯"
    },
    {
      title: "Educational Resources",
      description: "Access to heart health information, research materials, and educational content for schools and communities.",
      icon: "📚"
    },
    {
      title: "Community Outreach",
      description: "Regular health screenings, awareness campaigns, and community events promoting heart health.",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover how Hearts of Tomorrow is making a difference through our comprehensive range of services and programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-accent-light p-8 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="mb-8">
              Join our programs or partner with us to create a lasting impact in heart disease prevention.
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 