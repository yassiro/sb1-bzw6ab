import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            We're here to answer any questions you may have about our insurance services. Reach out to us and we'll respond as soon as we can.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-2" />
              <span>123 Insurance Street, City, State 12345</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-2" />
              <span>info@tswafiinsurance.com</span>
            </div>
          </div>
        </div>
        <div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;