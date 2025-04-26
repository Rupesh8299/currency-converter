
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useAuth } from "@/hooks/useAuth";
import { UserRound, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Header: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-converter-blue text-white py-3 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-bold">ConverTex</h1>
            </Link>
          </div>

          <div className="hidden md:flex">
            <Tabs defaultValue="currencies">
              <TabsList className="bg-blue-800/40">
                <TabsTrigger value="currencies" className="text-white data-[state=active]:bg-white data-[state=active]:text-converter-blue">
                  Currencies
                </TabsTrigger>
                <TabsTrigger value="crypto" className="text-white data-[state=active]:bg-white data-[state=active]:text-converter-blue">
                  Crypto
                </TabsTrigger>
                <TabsTrigger value="metals" className="text-white data-[state=active]:bg-white data-[state=active]:text-converter-blue">
                  Metals
                </TabsTrigger>
                <TabsTrigger value="widgets" className="text-white data-[state=active]:bg-white data-[state=active]:text-converter-blue">
                  Widgets
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-sm">Economic Calendar</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path d="M20 8.67V4.5c0-.83-.67-1.5-1.5-1.5h-4.17L12 0 9.67 3H5.5C4.67 3 4 3.67 4 4.5v4.17L0 12l3 2.33V19c0 .83.67 1.5 1.5 1.5h4.17L12 24l2.33-3h4.17c.83 0 1.5-.67 1.5-1.5v-4.17L24 12l-4-3.33z"></path>
              </svg>
              <span className="text-sm">MetaTrader 5</span>
            </div>
          </div>
          
          {user ? (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserRound className="h-5 w-5 text-white" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-48">
                <div className="space-y-2">
                  <p className="text-sm font-medium">{user.email}</p>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 px-2"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Link to="/signin">
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-converter-blue">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
