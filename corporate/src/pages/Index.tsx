
import React from "react";
import { Link } from "react-router-dom";
import { Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-realestate-navy text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-realestate-teal" />
              <span className="ml-2 text-xl font-bold">EstatePortfolio Pro</span>
            </div>
            <div>
              {isAuthenticated ? (
                <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/login">Log In</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-realestate-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Manage Your Real Estate Portfolio Like a Pro
              </h1>
              <p className="text-xl mb-10">
                The all-in-one platform for real estate companies to manage properties, 
                market listings, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-realestate-teal hover:bg-realestate-teal/90">
                  <Link to="/login">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-realestate-navy mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform provides all the tools you need to manage and grow your real estate business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-realestate-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="text-realestate-teal h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Property Management</h3>
                <p className="text-gray-600">
                  Upload and manage your entire property portfolio in one place with detailed information and media.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-realestate-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="text-realestate-teal h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Marketplace Listings</h3>
                <p className="text-gray-600">
                  Automatically list your properties for sale or rent in our marketplace for maximum exposure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-realestate-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="text-realestate-teal h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3D Tours</h3>
                <p className="text-gray-600">
                  Showcase your properties with immersive 3D tours that let buyers experience spaces virtually.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-realestate-teal hover:bg-realestate-teal/90">
                <Link to="/login">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-realestate-navy mb-4">
                Choose the Right Plan for Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible pricing options to match your business needs as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-realestate-navy">Starter</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="mt-2 text-gray-600">Perfect for small agencies and individual agents</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 20 active properties
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 5 active 3D tours
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic analytics
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Email support
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-realestate-teal hover:bg-realestate-teal/90">
                    <Link to="/login">Get Started</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-realestate-teal">
                <div className="p-6 border-b bg-realestate-teal text-white">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$299</span>
                    <span>/month</span>
                  </div>
                  <p className="mt-2">For established agencies and property management companies</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Unlimited properties
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 20 active 3D tours
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Featured marketplace listings
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Custom branding
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-realestate-teal hover:bg-realestate-teal/90">
                    <Link to="/login">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-realestate-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Building className="h-8 w-8 text-realestate-teal" />
                <span className="ml-2 text-xl font-bold">EstatePortfolio Pro</span>
              </div>
              <p className="mt-4 max-w-xs text-gray-400">
                The complete solution for real estate professionals to manage and market properties.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EstatePortfolio Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
