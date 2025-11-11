import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const Testimonial = ({ name, role, content, rating, avatar }: TestimonialProps) => {
  return (
    <Card className="p-6 space-y-4 bg-card hover-lift border-border/50">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted"}`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic leading-relaxed">"{content}"</p>
      
      <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
