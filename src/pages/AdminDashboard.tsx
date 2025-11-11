import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Package, DollarSign, Users, TrendingUp, Edit, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = [
    { label: "Total Sales", value: "$45,231", change: "+20.1%", icon: DollarSign },
    { label: "Orders", value: "156", change: "+12.5%", icon: Package },
    { label: "Customers", value: "2,341", change: "+18.2%", icon: Users },
    { label: "Revenue Growth", value: "+23%", change: "+4.3%", icon: TrendingUp },
  ];

  const recentOrders = [
    { id: "ORD-156", customer: "Sarah Johnson", product: "Modern Frame", amount: 89.99, status: "Completed" },
    { id: "ORD-155", customer: "Michael Chen", product: "Rustic Print", amount: 69.99, status: "Processing" },
    { id: "ORD-154", customer: "Emma Williams", product: "Abstract Art", amount: 129.99, status: "Shipped" },
  ];

  const products = [
    { id: "1", name: "Modern Geometric Frame", price: 89.99, stock: 45, sales: 234 },
    { id: "2", name: "Rustic Botanical Print", price: 69.99, stock: 23, sales: 189 },
    { id: "3", name: "Abstract Contemporary Art", price: 129.99, stock: 67, sales: 312 },
  ];

  const handleAddProduct = () => {
    toast.success("Product added successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">Admin Dashboard</h1>
          <Badge variant="outline" className="text-primary border-primary">
            Administrator
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">
              <BarChart className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="products">
              <Package className="h-4 w-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger value="orders">
              <Package className="h-4 w-4 mr-2" />
              Orders
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 border-border/50 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </Card>
              ))}
            </div>

            {/* Recent Orders */}
            <Card className="p-6 border-border/50">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Recent Orders
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>${order.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={order.status === "Completed" ? "default" : "outline"}
                          className={
                            order.status === "Processing" ? "bg-yellow-100 text-yellow-700" : ""
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Product Management
              </h2>
              <Button variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {/* Add/Edit Product Form */}
            <Card className="p-6 border-border/50">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Add New Product
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="productName">Product Name</Label>
                    <Input id="productName" placeholder="Modern Geometric Frame" required />
                  </div>
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" type="number" step="0.01" placeholder="89.99" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="Modern" required />
                  </div>
                  <div>
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input id="stock" type="number" placeholder="50" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Product description..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Product Image URL</Label>
                  <Input id="image" placeholder="https://..." required />
                </div>

                <Button type="submit" variant="default">
                  Save Product
                </Button>
              </form>
            </Card>

            {/* Products Table */}
            <Card className="p-6 border-border/50">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                All Products
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Total Sales</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={product.stock < 30 ? "destructive" : "outline"}>
                          {product.stock} units
                        </Badge>
                      </TableCell>
                      <TableCell>{product.sales}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Order Management
            </h2>

            <Card className="p-6 border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>Jan 15, 2024</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>${order.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{order.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
