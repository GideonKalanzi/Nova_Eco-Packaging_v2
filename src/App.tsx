import React from 'react';
import { Leaf, Package2, Phone, Mail, MapPin, ChevronDown, Recycle, Shield, TreePine } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Nova Eco-Packaging</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-green-800 hover:text-green-600">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-green-800 hover:text-green-600">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-green-800 hover:text-green-600">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-green-800 hover:text-green-600">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Sustainable Packaging Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Leading the revolution in eco-friendly packaging with innovative, biodegradable solutions for a greener tomorrow.
            </p>
            <button
              onClick={() => scrollToSection('products')}
              className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Explore Our Products
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <Package2 className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-4">Biodegradable Boxes</h3>
              <p className="text-gray-600">Made from 100% recycled materials, our boxes decompose naturally without harming the environment.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <Recycle className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-4">Compostable Mailers</h3>
              <p className="text-gray-600">Plant-based mailers that break down completely in home compost within 180 days.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-4">Protective Solutions</h3>
              <p className="text-gray-600">Eco-friendly bubble wrap alternatives and protective packaging made from organic materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-green-800 mb-6">About Nova Packaging</h2>
              <p className="text-gray-600 mb-6">
<<<<<<< HEAD
              NOVA-ECO PACKAGING (U) LTD is a youth run start-up that was conceived in 2019 to innovate
              new affordable and environmentally friendly solutions to product packaging especially for Small
              and Medium Enterprises (SMEs). Since then, our company has evolved from a small informal
              entity into a formally established business. We have established a dedicated production facility,
              enabling us to innovate better products, serve our customers better and further our vision of a
              changed packaging industry landscape that priotizes innovation and sustainability to empower
              businesses and individuals to make a positive &amp; lasting Impact on the environment.
              We are striving to become the leading provider of eco-packaging solutions in the region,
              fostering a culture of innovation and sustainability and inspire a national movement towards a
              waste free future.
=======
                Founded with a vision to revolutionize the packaging industry, Nova Packaging is committed to creating sustainable solutions that don't compromise on quality or performance.
>>>>>>> d4e4925 (Made needed changes)
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <TreePine className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">100% Sustainable Materials</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Recycle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">Fully Biodegradable Products</span>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">Environmental Certifications</span>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800"
                alt="Sustainable Packaging"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Phone</h3>
<<<<<<< HEAD
                  <p className="text-gray-600">
                  +256764684872(Available on Whastapp) <br></br>
                  +256779526240 <br></br>
                  +256705746439 <br></br>
                  +256704561630
                  </p>
=======
                  <p className="text-gray-600">+1 (555) 123-4567</p>
>>>>>>> d4e4925 (Made needed changes)
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Email</h3>
<<<<<<< HEAD
                  <p className="text-gray-600">ecofairpackaging@gmail.com</p>
=======
                  <p className="text-gray-600">contact@novapackaging.com</p>
>>>>>>> d4e4925 (Made needed changes)
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Address</h3>
<<<<<<< HEAD
                  <p className="text-gray-600">
                    Kampala workshop: Nasser road, Ddembelyo house 2nd floor. <br></br>
                    Mbarara workshop: Rwebikoona Market No.61
                  </p>
=======
                  <p className="text-gray-600">123 Eco Street, Green City, EC 12345</p>
>>>>>>> d4e4925 (Made needed changes)
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">Nova Packaging</span>
          </div>
          <p className="text-green-200">© 2025 Nova Packaging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;