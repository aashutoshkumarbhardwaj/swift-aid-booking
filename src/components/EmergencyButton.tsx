
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyButton = () => {
  const handleEmergencyCall = () => {
    // In a real app, this would dial emergency services
    alert('Calling Emergency Services: 108');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleEmergencyCall}
        className="btn-emergency animate-pulse-emergency w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
        size="lg"
      >
        <Phone className="h-8 w-8" />
      </Button>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-emergency text-xs font-semibold whitespace-nowrap">
        SOS Emergency
      </div>
    </div>
  );
};

export default EmergencyButton;
