import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { VendorDashboard } from "@/components/vendor-dashboard";
import { SupplierDashboard } from "@/components/supplier-dashboard";

type ViewType = "home" | "vendor" | "supplier";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const handleVendorClick = () => setCurrentView("vendor");
  const handleSupplierClick = () => setCurrentView("supplier");
  const handleBackToHome = () => setCurrentView("home");

  if (currentView === "vendor") {
    return <VendorDashboard onBack={handleBackToHome} />;
  }

  if (currentView === "supplier") {
    return <SupplierDashboard onBack={handleBackToHome} />;
  }

  return (
    <HeroSection 
      onVendorClick={handleVendorClick} 
      onSupplierClick={handleSupplierClick} 
    />
  );
};

export default Index;
