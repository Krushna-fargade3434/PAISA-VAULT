import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Log 404 errors for debugging (only in development)
    if (import.meta.env.DEV) {
      console.warn(`404 Error: User tried to access ${location.pathname}`);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="space-y-2">
          <h1 className="text-8xl font-display font-bold text-primary">404</h1>
          <h2 className="text-3xl font-display font-semibold text-gray-800">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-muted-foreground text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
          <span className="font-mono text-xs">
            Path: {location.pathname}
          </span>
        </div>
        
        <div className="flex gap-3 justify-center pt-4 flex-wrap">
          <Button onClick={() => navigate('/')} className="gap-2">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button onClick={() => navigate('/dashboard')} variant="outline" className="gap-2">
            <Search className="w-4 h-4" />
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
