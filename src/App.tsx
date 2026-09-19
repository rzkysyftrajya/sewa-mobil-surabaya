import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import ArmadaPage from "./pages/ArmadaPage";
import AreaCakupanPage from "./pages/AreaCakupanPage";
import KenapaKamiPage from "./pages/KenapaKamiPage";
import FAQPage from "./pages/FAQPage";
import KontakPage from "./pages/KontakPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import TourSurabayaPage from "./pages/TourSurabayaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/layanan" element={<LayananPage />} />
              <Route path="/armada" element={<ArmadaPage />} />
              <Route path="/area-cakupan" element={<AreaCakupanPage />} />
              <Route path="/kenapa-kami" element={<KenapaKamiPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontak" element={<KontakPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/tour-surabaya" element={<TourSurabayaPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
