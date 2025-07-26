import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Plus, 
  Package, 
  TrendingUp,
  MessageCircle,
  Users,
  Truck,
  Edit,
  Trash2
} from "lucide-react";

interface SupplierDashboardProps {
  onBack: () => void;
}

const myProducts = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "₹35/kg",
    stock: "250 kg",
    orders: 12,
    status: "active"
  },
  {
    id: 2,
    name: "Red Chili Powder",
    category: "Spices",
    price: "₹220/kg",
    stock: "80 kg",
    orders: 8,
    status: "active"
  },
  {
    id: 3,
    name: "Cooking Oil",
    category: "Oil & Ghee",
    price: "₹145/L",
    stock: "120 L",
    orders: 15,
    status: "low_stock"
  }
];

const recentOrders = [
  {
    id: 1,
    vendor: "Rajesh's Chaat Corner",
    items: "Tomatoes 5kg, Onions 3kg",
    amount: "₹240",
    status: "pending",
    time: "2 hours ago"
  },
  {
    id: 2,
    vendor: "Delhi Street Food",
    items: "Cooking Oil 2L",
    amount: "₹290",
    status: "completed",
    time: "5 hours ago"
  }
];

const chatMessages = [
  { id: 1, user: "Rajesh (Vendor)", message: "Do you have fresh coriander available today?", time: "5 min ago" },
  { id: 2, user: "You", message: "Yes! Fresh stock arrived this morning. 50kg available.", time: "2 min ago" },
  { id: 3, user: "Priya (Vendor)", message: "What's your best price for bulk oil orders?", time: "1 hour ago" },
];

export const SupplierDashboard = ({ onBack }: SupplierDashboardProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: ""
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-supplier rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-supplier">Supplier Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Welcome, Fresh Vegetables Hub!</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">35</p>
              </div>
              <TrendingUp className="w-8 h-8 text-supplier" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Products</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Package className="w-8 h-8 text-supplier" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Connected Vendors</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Users className="w-8 h-8 text-supplier" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">₹25,400</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">My Products</h3>
              <Button variant="supplier">
                <Plus className="w-4 h-4 mr-2" />
                Add New Product
              </Button>
            </div>

            <div className="grid gap-6">
              {myProducts.map((product) => (
                <Card key={product.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold">{product.name}</h4>
                        <Badge variant="secondary">{product.category}</Badge>
                        <Badge 
                          variant={product.status === "active" ? "default" : "destructive"}
                        >
                          {product.status === "active" ? "Active" : "Low Stock"}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Price: </span>
                          <span className="font-medium">{product.price}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Stock: </span>
                          <span className="font-medium">{product.stock}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Orders: </span>
                          <span className="font-medium">{product.orders} this month</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h3 className="text-2xl font-bold">Recent Orders</h3>
            
            <div className="grid gap-4">
              {recentOrders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{order.vendor}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">{order.amount}</span>
                        <Badge 
                          variant={order.status === "completed" ? "default" : "secondary"}
                        >
                          {order.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{order.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {order.status === "pending" && (
                        <>
                          <Button variant="supplier" size="sm">Accept</Button>
                          <Button variant="outline" size="sm">Decline</Button>
                        </>
                      )}
                      {order.status === "completed" && (
                        <Button variant="outline" size="sm">View Details</Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="add-product" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Add New Product</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Product Name</label>
                    <Input 
                      placeholder="e.g., Fresh Tomatoes"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Input 
                      placeholder="e.g., Vegetables, Spices, Oil"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price</label>
                    <Input 
                      placeholder="e.g., ₹35/kg"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Available Stock</label>
                    <Input 
                      placeholder="e.g., 100 kg"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea 
                      placeholder="Describe your product quality, origin, etc."
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="supplier" size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Community Chat</h3>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div key={message.id} className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{message.user}</span>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                  </div>
                ))}
              </div>
              
              {/* Send Message */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button variant="supplier">Send</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};