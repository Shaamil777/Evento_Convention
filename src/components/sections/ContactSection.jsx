import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Title Section */}
        <div className="text-center py-16 text-white">
          <h4
            className="text-amber-400 intro-main-title text-4xl md:text-5xl lg:text-6xl"
          >
            Make a
          </h4>
          <h1
            className="text-white text-4xl md:text-6xl intro-main-name tracking-wider"
          >
            CONTACT
          </h1>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 container mx-auto px-4 pb-16 flex flex-col items-center">
          <div className="w-full md:max-w-5xl bg-[#1c1c1c]/80 p-8 md:p-12 rounded shadow-2xl flex flex-col md:flex-row gap-8">
            {/* Location Info & Form */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              {/* Location Info */}
              <div className="mb-10">
                <h3
                  className="text-2xl contact-title text-white font-semibold mb-4"
                  
                >
                  Evento Convention Center
                </h3>
                <div className="space-y-2 contact-text  text-white">
                  <p>
                    <strong>Address:</strong> 100 S Main St, Los Angeles, CA
                  </p>
                  <p>
                    <strong>Phone:</strong> (208) 333 9296
                  </p>
                  <p>
                    <strong>Fax:</strong> (208) 333 9298
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:contact@example.com"
                      className="text-blue-600 hover:underline"
                    >
                      contact@example.com
                    </a>
                  </p>
                </div>
              </div>
              {/* Form */}
              <div>
                <h3
                  className="text-2xl contact-title text-white font-semibold mb-6"
                  
                >
                  Send Us Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4 ">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border contact-text text-white border-gray-300 rounded focus:outline-none focus:border-amber-600"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border contact-text text-white border-gray-300 rounded focus:outline-none focus:border-amber-600"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 border contact-text text-white border-gray-300 rounded focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="7"
                        className="w-full px-4 py-3 border contact-text text-white border-gray-300 rounded focus:outline-none focus:border-amber-600 resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 px-8 py-3 border-2 contact-text text-white border-white text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  >
                    SUBMIT FORM
                  </button>
                </form>
              </div>
            </div>
            {/* Map Section */}
            <div className="w-full md:w-1/3 flex justify-center items-stretch">
              <div className="h-full w-full min-h-[400px] rounded overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.2453181849353!3d34.05117548060617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648d9808fbd%3A0xb79dfbc6ae338c12!2s100%20S%20Main%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sid!4v1592143290578!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hotel Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-black/80 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © Copyright 2025 - Evento Convention Center 
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
