import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
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

          {user ? (
            <div className="flex items-center space-x-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <UserRound className="h-5 w-5 text-white" />
                    <span className="text-white hidden md:inline-block">
                      {user.displayName || user.email?.split("@")[0]}
                    </span>
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
            </div>
          ) : (
            <Link to="/signin">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-converter-blue hover:bg-gray-100 font-medium"
              >
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
