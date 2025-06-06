import { motion } from 'framer-motion';
import { useRef } from 'react';

const StatWidget = ({ number, label, delay }) => (
  <motion.div
    className="glass-effect bg-gradient-to-br from-white/80 via-red-50/50 to-red-100/30 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <h3 className="text-4xl stat-number text-red-600 mb-2">{number}</h3>
    <p className="stat-label text-red-700/80 text-sm">{label}</p>
  </motion.div>
);

const FeatureWidget = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="glass-effect bg-gradient-to-br from-white/90 via-red-50/30 to-red-100/20 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="text-red-600/80 mb-3 w-8 h-8">
      {Icon}
    </div>
    <h3 className="text-lg feature-title text-red-700 mb-2">{title}</h3>
    <p className="feature-text text-red-900/70 text-sm">{description}</p>
  </motion.div>
);

const Home = () => {
  const statsRef = useRef(null);
  
  return (
    <div className="min-h-screen">
      <div className="page-background" />
      <div className="floating-shapes" />

      <section className="py-12 content-section">
        <div className="container-custom relative">
          <div className="pattern-dots absolute inset-0 opacity-30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Building a{' '}
                <span className="gradient-text">Healthier</span> Tomorrow
              </h1>
              <p className="text-red-900/70 mb-8 max-w-md text-lg font-light tracking-wide">
                Join us in our mission to prevent heart disease through education, 
                innovation, and youth empowerment.
              </p>
              <motion.button 
                className="btn-primary bg-gradient-to-r from-red-600 to-red-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <StatWidget number="50+" label="Youth Programs" delay={0.2} />
              <StatWidget number="1000+" label="Lives Impacted" delay={0.3} />
              <StatWidget number="20+" label="Partners" delay={0.4} />
              <StatWidget number="95%" label="Success Rate" delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 content-section relative">
        <div className="pattern-lines absolute inset-0 opacity-40" />
        <div className="container-custom relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureWidget
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              title="Prevention First"
              description="Innovative approaches to prevent heart disease before it starts."
              delay={0.2}
            />
            <FeatureWidget
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                </svg>
              }
              title="Youth Innovation"
              description="Empowering young minds to solve healthcare challenges."
              delay={0.3}
            />
            <FeatureWidget
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3 3 0 11-7.5 0 3 3 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              }
              title="Community Impact"
              description="Building stronger, healthier communities together."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section className="py-12 content-section">
        <div className="container-custom">
          <motion.div
            className="glass-effect bg-gradient-to-r from-white/80 via-red-50/50 to-white/80 rounded-3xl p-8 text-center max-w-3xl mx-auto border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light tracking-tight mb-4 text-red-800">Ready to Make a Difference?</h2>
            <p className="text-red-900/70 mb-6 text-lg font-light tracking-wide">
              Join our community of changemakers and help shape the future of heart health.
            </p>
            <motion.button 
              className="btn-primary bg-gradient-to-r from-red-600 to-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 