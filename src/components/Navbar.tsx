import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 0; // Will be dynamic later

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary">EmptySpace</span>
            <span className="text-2xl font-serif font-light text-accent">Frames</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Shop
            </Link>
            <Link to="/collections" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Collections
            </Link>
            <Link to="/custom" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Custom Frames
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              to="/shop"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/custom"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Frames
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
