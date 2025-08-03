import React from 'react';
import { ShoppingCart, Menu, X, Star, Leaf, Heart, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const products = [
    {
      id: 1,
      name: "Nopal Powder",
      description: "Premium organic cactus powder rich in fiber and antioxidants",
      price: "$24.99",
      image: "/nopal-powder.jpg",
      rating: 4.8
    },
    {
      id: 2,
      name: "Prickly Pear Oil",
      description: "Pure cold-pressed oil for radiant skin and hair",
      price: "$39.99",
      image: "/prickly-pear-oil.jpg",
      rating: 5.0
    },
    {
      id: 3,
      name: "Cactus Water",
      description: "Refreshing hydration with natural electrolytes",
      price: "$4.99",
      image: "/cactus-water.jpg",
      rating: 4.5
    },
    {
      id: 4,
      name: "Nopal Capsules",
      description: "Convenient daily supplement for digestive health",
      price: "$19.99",
      image: "/nopal-capsules.jpg",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">Desert Delights</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
              <a href="#products" className="text-gray-700 hover:text-emerald-600 transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart (0)
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Products</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
              <button className="w-full text-left bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart (0)
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Cactus Products</h2>
              <p className="text-xl mb-6">Discover the natural goodness of carefully selected cactus paddles, harvested for your health and wellness.</p>
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
            <div className="relative">
              <img src="/hero-cactus.jpg" alt="Fresh cactus paddles" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <Leaf className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600">Sustainably grown without pesticides or chemicals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <Heart className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
              <p className="text-gray-600">Rich in vitamins, minerals, and antioxidants</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <Award className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected and carefully processed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">From Our Desert to Your Home</h2>
              <p className="text-gray-600 mb-4">
                We're passionate about bringing you the finest cactus products from the heart of Sonora, Mexico. 
                Our nopales are carefully harvested at peak freshness and processed using traditional methods 
                that preserve their nutritional value.
              </p>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience, we work directly with local farmers who share our commitment 
                to sustainable agriculture and fair trade practices.
              </p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                Learn More About Us
              </button>
            </div>
            <div>
              <img src="/about-farm.jpg" alt="Cactus farm in Sonora" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8">Get exclusive offers and health tips delivered to your inbox</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button type="submit" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Desert Delights</h3>
              <p className="text-gray-400">Premium cactus products for a healthier lifestyle</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-white transition">Products</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@desertdelights.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Desert Road<br />Hermosillo, Sonora, Mexico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Desert Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;