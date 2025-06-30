
import React, { useState } from 'react';
import { Menu, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [hasNotifications] = useState(true);
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 2 new ride updates and 1 emergency alert.",
      duration: 3000,
    });
  };

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Opening profile settings...",
      duration: 2000,
    });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-rapidaid-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-xl text-rapidaid-teal hidden sm:block">
            RapidAid
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative"
          onClick={handleNotificationClick}
        >
          <Bell className="h-5 w-5" />
          {hasNotifications && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emergency rounded-full animate-pulse"></span>
          )}
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center space-x-2"
          onClick={handleProfileClick}
        >
          <User className="h-5 w-5" />
          <span className="hidden sm:inline">Profile</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
