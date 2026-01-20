import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-display font-bold text-primary">404</h1>
        <h2 className="text-2xl font-display font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center pt-4">
          <Button onClick={() => navigate('/')} className="gap-2">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
