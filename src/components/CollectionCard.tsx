import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const CollectionCard = ({ name, description, image, link }: CollectionCardProps) => {
  return (
    <Link to={link} className="group block relative overflow-hidden rounded-xl h-96 hover-lift">
      <div
        className="absolute inset-0 bg-cover bg-center transition-smooth group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="font-serif text-3xl font-bold mb-2">{name}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm group-hover:translate-x-1 transition-smooth">
          Explore Collection
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Link>
  );
};

export default CollectionCard;
