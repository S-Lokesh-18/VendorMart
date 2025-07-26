import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Star, 
  MessageCircle, 
  ArrowLeft, 
  Filter,
  ShoppingCart,
  Phone,
  Store
} from "lucide-react";

interface VendorDashboardProps {
  onBack: () => void;
}

const suppliers = [
  {
    id: 1,
    name: "Fresh Vegetables Hub",
    location: "Connaught Place, Delhi",
    rating: 4.8,
    products: ["Onions", "Tomatoes", "Potatoes", "Green Chilies"],
    price: "₹25-45/kg",
    distance: "2.3 km",
    verified: true
  },
  {
    id: 2,
    name: "Spice Masters",
    location: "Karol Bagh, Delhi",
    rating: 4.9,
    products: ["Garam Masala", "Red Chili Powder", "Turmeric", "Cumin"],
    price: "₹180-250/kg",
    distance: "3.1 km",
    verified: true
  },
  {
    id: 3,
    name: "Oil & Ghee Corner",
    location: "Lajpat Nagar, Delhi",
    rating: 4.6,
    products: ["Cooking Oil", "Ghee", "Butter", "Refined Oil"],
    price: "₹120-180/L",
    distance: "1.8 km",
    verified: true
  }
];

const chatMessages = [
  { id: 1, user: "Rajesh (Vendor)", message: "Anyone know good supplier for fresh coriander leaves?", time: "2 min ago" },
  { id: 2, user: "Supplier_VegHub", message: "We supply fresh coriander daily. Check our profile!", time: "5 min ago" },
  { id: 3, user: "Priya (Vendor)", message: "Bulk order discount available for oil?", time: "12 min ago" },
];

export const VendorDashboard = ({ onBack }: VendorDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");

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
                <div className="w-8 h-8 bg-vendor rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-vendor">Vendor Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Welcome, Rajesh!</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="suppliers" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="suppliers">Find Suppliers</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="suppliers" className="space-y-6">
            {/* Search and Filter */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search suppliers, products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="md:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </Card>

            {/* Suppliers List */}
            <div className="grid gap-6">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{supplier.name}</h3>
                        {supplier.verified && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{supplier.location} • {supplier.distance}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{supplier.rating}</span>
                        <span className="text-muted-foreground ml-2">rating</span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm text-muted-foreground mb-2">Products:</p>
                        <div className="flex flex-wrap gap-1">
                          {supplier.products.map((product, index) => (
                            <Badge key={index} variant="secondary">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <p className="font-medium text-vendor">Price Range: {supplier.price}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 md:w-40">
                      <Button variant="vendor" className="w-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Order Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
              <div className="text-center py-12 text-muted-foreground">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No orders yet. Start by finding suppliers!</p>
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
                <Button variant="vendor">Send</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};