import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, Truck, Users, MessageCircle, Shield, Star, MapPin, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-street-food.jpg";

interface HeroSectionProps {
  onVendorClick: () => void;
  onSupplierClick: () => void;
  onContactClick: () => void;
}

export const HeroSection = ({ onVendorClick, onSupplierClick, onContactClick }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-vendor to-accent rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-vendor to-accent bg-clip-text text-transparent">
                Vendor Mart
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <button onClick={onContactClick} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="flex-1 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-[600px]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Street Food
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Vendors & Suppliers
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
              India's first dedicated marketplace for street food raw materials. 
              Find trusted suppliers, get best prices, and grow your business together.
            </p>
            
            {/* CTA Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer group" onClick={onVendorClick}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vendor rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">I'm a Vendor</h3>
                  <p className="text-muted-foreground mb-6">
                    Find reliable suppliers for your street food business
                  </p>
                  <Button 
                    variant="vendor" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://bitwisebinary.com', '_blank')}
                  >
                    Find Suppliers
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer group" onClick={onSupplierClick}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-supplier rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">I'm a Supplier</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with thousands of street food vendors
                  </p>
                  <Button 
                    variant="supplier" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://bitwisebinary.com', '_blank')}
                  >
                    Start Selling
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Why Choose Vendor Mart?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for India's street food ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vendor/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-vendor" />
              </div>
              <h4 className="text-xl font-bold mb-3">Valid Verification</h4>
              <p className="text-muted-foreground">
                All suppliers verified with proper documentation and licenses
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-supplier/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-supplier" />
              </div>
              <h4 className="text-xl font-bold mb-3">Ratings & Reviews</h4>
              <p className="text-muted-foreground">
                Transparent feedback system for quality assurance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-3">Complete Business Solution</h4>
              <p className="text-muted-foreground">
                Everything related to your street food business in one place
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-3">Live Order Tracking</h4>
              <p className="text-muted-foreground">
                Real-time tracking of your orders using Google Maps integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">About Vendor Mart</h3>
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Vendor Mart is India's first dedicated digital marketplace connecting street food vendors 
                with raw material suppliers. We understand the unique challenges faced by street food 
                vendors in sourcing quality ingredients at affordable prices.
              </p>
              <p>
                Our platform bridges the gap between vendors and suppliers, creating a trusted ecosystem 
                where business relationships can flourish. With features like verified supplier profiles, 
                real-time order tracking, community chat, and transparent ratings, we're revolutionizing 
                how street food businesses operate.
              </p>
              <p>
                From finding the perfect supplier for your momos ingredients to tracking your order in 
                real-time on Google Maps, Vendor Mart provides everything you need to grow your street 
                food business efficiently and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};