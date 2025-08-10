import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navigation from '@/components/navigation';
import ParticlesBackground from '@/components/particles-background';
import PageTransition from '@/components/page-transition';
import Home from '@/pages/home';
import Services from '@/pages/services';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';

function Router() {
  const [location] = useLocation();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = location.slice(1) || 'home';
    setCurrentPage(path);
  }, [location]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const getCurrentPageComponent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <PageTransition pageKey={currentPage}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
