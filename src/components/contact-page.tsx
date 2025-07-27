import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage = ({ onBack }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Contact Us</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or need support? We're here to help you grow your street food business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-vendor/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-vendor" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-muted-foreground">support@vendormart.com</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Send us an email and we'll respond within 24 hours.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-supplier/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-supplier" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available Monday to Friday, 9 AM to 6 PM IST.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-muted-foreground">
                      123 Food Street, Market District<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Drop by our office for a chat over chai!
                </p>
              </Card>

              {/* FAQ Section */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">How do I verify my supplier account?</p>
                    <p className="text-muted-foreground">Upload your business license and GST certificate through your dashboard.</p>
                  </div>
                  <div>
                    <p className="font-medium">Is there a fee to join Vendor Mart?</p>
                    <p className="text-muted-foreground">Registration is free! We only charge a small commission on successful transactions.</p>
                  </div>
                  <div>
                    <p className="font-medium">How does order tracking work?</p>
                    <p className="text-muted-foreground">We integrate with Google Maps to provide real-time delivery tracking for all orders.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};