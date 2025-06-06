import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      bio: "Cardiologist with 15+ years of experience in preventive cardiology."
    },
    {
      name: "Michael Chen",
      role: "Youth Programs Director",
      bio: "Education specialist focused on engaging young minds in healthcare innovation."
    },
    {
      name: "Lisa Rodriguez",
      role: "Community Outreach Manager",
      bio: "Public health expert with a passion for community wellness programs."
    }
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">About Hearts of Tomorrow</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We're on a mission to revolutionize heart disease prevention through youth empowerment and community engagement.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Hearts of Tomorrow was founded with a simple yet powerful vision: to create a future where heart disease is prevented before it begins. We believe that by empowering young people and communities with knowledge and practical solutions, we can make this vision a reality.
            </p>
            <p>
              Since our inception, we've been working tirelessly to develop innovative programs that combine medical expertise with youth ingenuity. Our approach focuses on prevention, education, and community engagement, creating lasting impact in the fight against heart disease.
            </p>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-accent-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <motion.section 
          className="bg-accent-light p-8 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">5000+</h3>
              <p>Students Educated</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p>Community Events</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
              <p>Research Projects</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 