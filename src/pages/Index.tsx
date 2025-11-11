import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CollectionCard from "@/components/CollectionCard";
import Testimonial from "@/components/Testimonial";
import heroImage from "@/assets/hero-living-room.jpg";
import frameModern from "@/assets/frame-modern.jpg";
import frameRustic from "@/assets/frame-rustic.jpg";
import frameAbstract from "@/assets/frame-abstract.jpg";
import frameMinimalist from "@/assets/frame-minimalist.jpg";

const Index = () => {
  // Mock data - will be replaced with actual data later
  const featuredProducts = [
    { id: "1", name: "Modern Geometric Frame", price: 89.99, image: frameModern, category: "Modern" },
    { id: "2", name: "Rustic Botanical Print", price: 69.99, image: frameRustic, category: "Rustic" },
    { id: "3", name: "Abstract Contemporary Art", price: 129.99, image: frameAbstract, category: "Abstract" },
    { id: "4", name: "Minimalist Line Art", price: 79.99, image: frameMinimalist, category: "Minimalist" },
  ];

  const collections = [
    {
      name: "Modern Collection",
      description: "Clean lines and contemporary designs for the modern home",
      image: frameModern,
      link: "/shop?collection=modern",
    },
    {
      name: "Rustic Collection",
      description: "Warm, natural textures that bring comfort to any space",
      image: frameRustic,
      link: "/shop?collection=rustic",
    },
    {
      name: "Abstract Collection",
      description: "Bold expressions of color and form",
      image: frameAbstract,
      link: "/shop?collection=abstract",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      content: "The quality is exceptional. These frames have transformed my clients' spaces beautifully.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "Fast shipping and gorgeous products. The custom framing service is worth every penny.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Art Collector",
      content: "Finally, a frame company that understands both quality and aesthetics. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
              Fill your space with meaning
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Curated frames and wall art that transform empty walls into stories worth telling.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop">
                <Button variant="hero">
                  Shop Now
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/custom">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-6 h-auto text-base">
                  Custom Frames
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Premium Quality", description: "Museum-grade materials" },
              { icon: Truck, title: "Free Shipping", description: "On orders over $100" },
              { icon: Shield, title: "Protected Delivery", description: "Secure packaging guaranteed" },
              { icon: Sparkles, title: "Custom Framing", description: "Tailored to your vision" },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-3 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Featured Frames
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked selections from our most popular collections
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="premium" size="lg">
                View All Products
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Carousel */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Collections
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover curated styles for every aesthetic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of satisfied customers transforming their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Start your journey to a more beautiful home today. Custom framing available for your cherished memories.
          </p>
          <Link to="/custom">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
