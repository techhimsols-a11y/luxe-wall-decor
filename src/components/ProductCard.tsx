import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-border/50 hover-lift bg-card">
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {category}
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-card/80 hover:bg-card backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-smooth"
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-accent text-accent" : ""}`} />
        </Button>
      </Link>

      <div className="p-4 space-y-3">
        <Link to={`/product/${id}`}>
          <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-accent">${price.toFixed(2)}</p>
          <Button
            size="icon"
            variant="default"
            className="hover-scale"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
