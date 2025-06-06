import { motion } from 'framer-motion';

const Opportunities = () => {
  const opportunities = [
    {
      title: "Research Internships",
      description: "Join our research team and contribute to groundbreaking studies in heart disease prevention.",
      commitment: "3-6 months",
      type: "Remote/Hybrid"
    },
    {
      title: "Youth Ambassador Program",
      description: "Become a voice for heart health in your community and lead local initiatives.",
      commitment: "6-12 months",
      type: "Part-time"
    },
    {
      title: "Tech Innovation Projects",
      description: "Develop digital solutions for heart health monitoring and awareness.",
      commitment: "Project-based",
      type: "Flexible"
    },
    {
      title: "Community Outreach",
      description: "Help organize and lead community events promoting heart health awareness.",
      commitment: "Ongoing",
      type: "Volunteer"
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
          <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover opportunities to make a difference in heart disease prevention and community health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              className="bg-white-red-soft backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{opportunity.title}</h3>
              <p className="text-gray-600 mb-6">{opportunity.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="bg-red-50 text-primary px-4 py-2 rounded-full">
                  {opportunity.commitment}
                </span>
                <span className="bg-red-50 text-primary px-4 py-2 rounded-full">
                  {opportunity.type}
                </span>
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
          <h2 className="text-2xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join our team of passionate individuals working towards a healthier future. 
            We welcome students, professionals, and volunteers from all backgrounds.
          </p>
          <button className="btn-primary rounded-full px-8">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Opportunities; 