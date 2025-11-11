import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import frameModern from "@/assets/frame-modern.jpg";
import frameRustic from "@/assets/frame-rustic.jpg";
import frameAbstract from "@/assets/frame-abstract.jpg";
import frameMinimalist from "@/assets/frame-minimalist.jpg";

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);

  // Mock products - will be replaced with actual data
  const products = [
    { id: "1", name: "Modern Geometric Frame", price: 89.99, image: frameModern, category: "Modern" },
    { id: "2", name: "Rustic Botanical Print", price: 69.99, image: frameRustic, category: "Rustic" },
    { id: "3", name: "Abstract Contemporary Art", price: 129.99, image: frameAbstract, category: "Abstract" },
    { id: "4", name: "Minimalist Line Art", price: 79.99, image: frameMinimalist, category: "Minimalist" },
    { id: "5", name: "Modern Gold Frame", price: 99.99, image: frameModern, category: "Modern" },
    { id: "6", name: "Rustic Wood Frame", price: 59.99, image: frameRustic, category: "Rustic" },
    { id: "7", name: "Abstract Watercolor", price: 149.99, image: frameAbstract, category: "Abstract" },
    { id: "8", name: "Minimalist Black Frame", price: 89.99, image: frameMinimalist, category: "Minimalist" },
  ];

  const categories = ["Modern", "Rustic", "Abstract", "Minimalist"];
  const materials = ["Wood", "Metal", "Acrylic", "Canvas"];
  const sizes = ["Small (8x10)", "Medium (16x20)", "Large (24x36)", "Extra Large (30x40)"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center">
            Shop All Frames
          </h1>
          <p className="text-muted-foreground text-lg text-center mt-4">
            Discover our complete collection of premium frames and wall art
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'} space-y-6`}>
            <div className="bg-card p-6 rounded-xl border border-border/50 space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-lg mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <Label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-serif font-semibold text-lg mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox id={material} />
                      <Label htmlFor={material} className="text-sm cursor-pointer">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-serif font-semibold text-lg mb-4">Size</h3>
                <div className="space-y-3">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={size} />
                      <Label htmlFor={size} className="text-sm cursor-pointer">
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-serif font-semibold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Button variant="default" className="w-full">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{products.length}</span> products
              </p>
              
              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="lg:hidden flex-1 sm:flex-none"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                
                <Select defaultValue="popularity">
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="newest">New Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <Button variant="outline">Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
