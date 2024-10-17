import React from 'react';
import { Home, Car, Heart, Briefcase, Umbrella } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { icon: Home, title: 'Home Insurance', description: 'Protect your home and belongings with our comprehensive coverage options.' },
    { icon: Car, title: 'Auto Insurance', description: 'Get the right coverage for your vehicle, whether it's for personal or commercial use.' },
    { icon: Heart, title: 'Life Insurance', description: 'Secure your family's future with our range of life insurance policies.' },
    { icon: Briefcase, title: 'Business Insurance', description: 'Safeguard your business with our tailored commercial insurance solutions.' },
    { icon: Umbrella, title: 'Umbrella Insurance', description: 'Add an extra layer of protection with our umbrella insurance policies.' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <p className="text-lg mb-8">
        Tswafi Insurance Agency offers a wide range of insurance products to meet all your needs. Our expert team will help you find the right coverage for your unique situation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <service.icon className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;