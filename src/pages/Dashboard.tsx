import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Heart, User, Settings } from "lucide-react";
import frameModern from "@/assets/frame-modern.jpg";
import frameRustic from "@/assets/frame-rustic.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Mock data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 229.97,
      items: [
        { name: "Modern Geometric Frame", image: frameModern, quantity: 1, price: 89.99 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "In Transit",
      total: 139.98,
      items: [
        { name: "Rustic Botanical Print", image: frameRustic, quantity: 2, price: 69.99 },
      ],
    },
  ];

  const savedItems = [
    { id: "1", name: "Abstract Contemporary Art", price: 129.99, image: frameModern },
    { id: "2", name: "Minimalist Line Art", price: 79.99, image: frameRustic },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">My Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">My Orders</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="p-6 border-border/50">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-foreground">Order #{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <p className="font-medium text-foreground">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Qty: {item.quantity} × ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end space-y-4">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-xl font-bold text-accent">${order.total.toFixed(2)}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        <Button variant="default" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Items Tab */}
          <TabsContent value="saved" className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Saved Items</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-border/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4 space-y-3">
                    <h3 className="font-serif font-semibold text-foreground">{item.name}</h3>
                    <p className="text-lg font-semibold text-accent">${item.price.toFixed(2)}</p>
                    <Button variant="default" size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Profile Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 border-border/50 space-y-6">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Personal Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
                  </div>

                  <Button variant="default">Save Changes</Button>
                </div>
              </Card>

              <Card className="p-6 border-border/50 space-y-6">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Shipping Address
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" defaultValue="123 Main St" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New York" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="NY" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP</Label>
                      <Input id="zip" defaultValue="10001" />
                    </div>
                  </div>

                  <Button variant="default">Update Address</Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
