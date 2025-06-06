import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      category: "Healthcare Organizations",
      description: "Leading medical institutions and healthcare providers working together to prevent heart disease.",
      examples: ["Local Hospitals", "Medical Research Centers", "Health Clinics"]
    },
    {
      category: "Educational Institutions",
      description: "Schools and universities collaborating on research and youth programs.",
      examples: ["Universities", "High Schools", "Research Institutions"]
    },
    {
      category: "Technology Partners",
      description: "Innovative companies helping us develop digital solutions for heart health.",
      examples: ["Health Tech Startups", "Software Companies", "Digital Health Platforms"]
    },
    {
      category: "Community Organizations",
      description: "Local organizations helping us reach and impact communities.",
      examples: ["Youth Centers", "Community Centers", "Health Advocacy Groups"]
    }
  ];

  return (
    <div className="py-12 bg-gradient-radial from-white via-red-50/30 to-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Collaborating with leading organizations to create a lasting impact in heart disease prevention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.category}
              className="bg-red-white-flow backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{partner.category}</h3>
              <p className="text-gray-600 mb-6">{partner.description}</p>
              <div className="flex flex-wrap gap-2">
                {partner.examples.map((example) => (
                  <span 
                    key={example}
                    className="bg-red-50 text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-red-subtle rounded-3xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Become a Partner</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join our network of partners and help us make a difference in heart disease prevention. 
            We welcome organizations of all sizes who share our vision.
          </p>
          <button className="btn-primary rounded-full px-8">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners; 