import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, Heart, Share2, Star } from "lucide-react";
import { toast } from "sonner";
import frameModern from "@/assets/frame-modern.jpg";
import frameRustic from "@/assets/frame-rustic.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [isLiked, setIsLiked] = useState(false);

  // Mock product data
  const product = {
    id: "1",
    name: "Modern Geometric Frame",
    price: 89.99,
    description: "A stunning geometric design that brings contemporary elegance to any space. Crafted with premium materials and attention to detail.",
    images: [frameModern, frameRustic],
    category: "Modern",
    material: "Premium Wood with Gold Accents",
    dimensions: "Available in multiple sizes",
    rating: 4.8,
    reviews: 127,
  };

  const [currentImage, setCurrentImage] = useState(0);

  const sizes = [
    { id: "small", name: "Small", dimensions: "8x10", price: 69.99 },
    { id: "medium", name: "Medium", dimensions: "16x20", price: 89.99 },
    { id: "large", name: "Large", dimensions: "24x36", price: 129.99 },
  ];

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} (${quantity}x)`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-smooth">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary/30">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover hover-scale cursor-pointer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-smooth ${
                    currentImage === index ? "border-primary" : "border-border/50"
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-3">Select Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 transition-smooth text-center ${
                      selectedSize === size.id
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold text-foreground">{size.name}</p>
                    <p className="text-sm text-muted-foreground">{size.dimensions}</p>
                    <p className="text-sm font-medium text-accent mt-1">${size.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="default"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-accent text-accent" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border/50 pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Material:</span>
                <span className="font-medium">{product.material}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Dimensions:</span>
                <span className="font-medium">{product.dimensions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{product.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full lg:w-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6 space-y-4">
              <h3 className="font-serif text-2xl font-semibold">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                This exquisite frame combines modern design principles with timeless craftsmanship. Each piece is carefully constructed using premium materials and finished by hand to ensure the highest quality standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for displaying your favorite photos, art prints, or memories. The versatile design complements both contemporary and traditional interiors, making it an ideal choice for any room in your home.
              </p>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <h3 className="font-serif text-2xl font-semibold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {/* Sample reviews would go here */}
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6 space-y-4">
              <h3 className="font-serif text-2xl font-semibold">Shipping Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Free shipping on all orders over $100. Standard delivery takes 5-7 business days. Express shipping available at checkout.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All frames are carefully packaged with protective materials to ensure they arrive in perfect condition.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
