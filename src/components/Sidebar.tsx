
import React from 'react';
import { Home, Map, Clock, User, Settings, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: 'booking', label: 'Book Ambulance', icon: Home },
    { id: 'tracking', label: 'Live Tracking', icon: Map },
    { id: 'history', label: 'Ride History', icon: Clock },
    { id: 'profile', label: 'Profile Settings', icon: User },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:shadow-none lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-rapidaid-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h2 className="font-bold text-xl text-rapidaid-teal">RapidAid</h2>
                <p className="text-sm text-gray-600">Emergency Services</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`
                  w-full justify-start h-14 rounded-2xl text-left transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-rapidaid-gradient text-white shadow-lg' 
                    : 'hover:bg-rapidaid-light text-gray-700'
                  }
                `}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose();
                }}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Emergency Contact */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-emergency-gradient rounded-2xl p-4 text-white text-center">
              <Phone className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">Emergency Helpline</p>
              <p className="text-sm opacity-90">Available 24/7</p>
              <Button
                variant="secondary"
                size="sm"
                className="mt-3 bg-white text-emergency hover:bg-gray-100"
                onClick={() => window.open('tel:108')}
              >
                Call 108
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
