import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { VendorDashboard } from "@/components/vendor-dashboard";
import { SupplierDashboard } from "@/components/supplier-dashboard";
import { ContactPage } from "@/components/contact-page";

type ViewType = "home" | "vendor" | "supplier" | "contact";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const handleVendorClick = () => setCurrentView("vendor");
  const handleSupplierClick = () => setCurrentView("supplier");
  const handleContactClick = () => setCurrentView("contact");
  const handleBackToHome = () => setCurrentView("home");

  if (currentView === "vendor") {
    return <VendorDashboard onBack={handleBackToHome} />;
  }

  if (currentView === "supplier") {
    return <SupplierDashboard onBack={handleBackToHome} />;
  }

  if (currentView === "contact") {
    return <ContactPage onBack={handleBackToHome} />;
  }

  return (
    <HeroSection 
      onVendorClick={handleVendorClick} 
      onSupplierClick={handleSupplierClick}
      onContactClick={handleContactClick}
    />
  );
};

export default Index;
