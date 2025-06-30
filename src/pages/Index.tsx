
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BookingForm from '@/components/BookingForm';
import LiveMap from '@/components/LiveMap';
import RideHistory from '@/components/RideHistory';
import ProfileSettings from '@/components/ProfileSettings';
import EmergencyButton from '@/components/EmergencyButton';

const Index = () => {
  const [activeTab, setActiveTab] = useState('booking');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'booking':
        return <BookingForm />;
      case 'tracking':
        return <LiveMap />;
      case 'history':
        return <RideHistory />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <BookingForm />;
    }
  };

  return (
    <div className="min-h-screen bg-rapidaid-gradient-soft">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 lg:p-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {renderActiveComponent()}
          </div>
        </main>
      </div>
      
      <EmergencyButton />
    </div>
  );
};

export default Index;
