import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Formation from "./pages/Kurslar";
import KursDetay from "./pages/FormasyonHazirlikDetay";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PsikodiyalektikCalisma from "./pages/PsikodiyalektikCalisma";
import Basvuru from "./pages/Basvuru";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/formasyon" element={<Formation />} />
            <Route path="/psikodiyalektik-calisma" element={<PsikodiyalektikCalisma />} />
            <Route path="/kurslar/:slug" element={<KursDetay />} />
            <Route path="/kadro" element={<Team />} />
            <Route path="/kadro/:slug" element={<Team />} />
            <Route path="/basvuru" element={<Basvuru />} />
            <Route path="/iletisim" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
