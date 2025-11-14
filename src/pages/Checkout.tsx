import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully!", {
      description: "Payment can be made later. You will receive order confirmation shortly.",
    });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2">
              <form onSubmit={handlePlaceOrder} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-card p-6 rounded-xl border border-border/50 space-y-6">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Shipping Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main St" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" required />
                    </div>
                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" placeholder="NY" required />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP / Postal Code</Label>
                      <Input id="zip" placeholder="10001" required />
                    </div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border border-border/30 mt-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Payment will be collected after order confirmation based on your order ID
                    </p>
                  </div>
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  Place Order (Pay Later)
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl border border-border/50 shadow-medium sticky top-24 space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">2 items</span>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">$229.97</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold text-accent">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-semibold">$18.40</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg">
                    <span className="font-serif font-semibold">Total</span>
                    <span className="font-serif font-bold text-accent">$248.37</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground text-center pt-4 border-t border-border/50">
                  <Lock className="inline-block h-3 w-3 mr-1" />
                  Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
