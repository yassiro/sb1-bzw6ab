import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome to Tswafi Insurance Agency</h2>
      <div className="mb-8">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Insurance concept" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      <p className="text-lg mb-6">
        At Tswafi Insurance Agency, we're committed to providing you with the best insurance solutions tailored to your unique needs. With years of experience and a dedication to customer service, we're here to protect what matters most to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="text-blue-600 mb-4 mx-auto" size={48} />
          <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
          <p>We offer a wide range of insurance products to ensure you're protected in every aspect of your life.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-blue-600 mb-4 mx-auto" size={48} />
          <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
          <p>Our team of experts is dedicated to understanding your unique needs and providing tailored solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-blue-600 mb-4 mx-auto" size={48} />
          <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
          <p>We work with top insurers to offer you the best coverage at the most competitive rates in the market.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;