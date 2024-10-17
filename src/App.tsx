import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Shield, Home, Phone } from 'lucide-react';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="mr-2" />
              <h1 className="text-2xl font-bold">Tswafi Insurance Agency</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-200"><Home className="inline mr-1" /> Home</Link></li>
                <li><Link to="/services" className="hover:text-blue-200"><Shield className="inline mr-1" /> Services</Link></li>
                <li><Link to="/contact" className="hover:text-blue-200"><Phone className="inline mr-1" /> Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Tswafi Insurance Agency. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;