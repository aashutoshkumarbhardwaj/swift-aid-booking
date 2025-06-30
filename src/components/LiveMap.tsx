
import React from 'react';
import { MapPin, Navigation, Ambulance, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LiveMap = () => {
  // Mock ambulance data
  const ambulanceData = {
    driverName: 'Dr. Rajesh Kumar',
    vehicleNumber: 'MH 01 AB 1234',
    estimatedArrival: '5 minutes',
    currentLocation: 'Approaching Bandra Junction',
    phone: '+91 98765 43210'
  };

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Navigation className="h-5 w-5" />
            <span>Live Ambulance Tracking</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Mock Map Display */}
          <div className="relative h-80 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-gray-300"></div>
                ))}
              </div>
            </div>
            
            {/* Ambulance Icon */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-emergency rounded-full flex items-center justify-center animate-bounce-soft shadow-lg">
                  <Ambulance className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md text-xs font-semibold whitespace-nowrap">
                  Your Ambulance
                </div>
              </div>
            </div>
            
            {/* Destination Pin */}
            <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-rapidaid-blue rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md text-xs font-semibold whitespace-nowrap">
                  Hospital
                </div>
              </div>
            </div>
            
            {/* Route Line */}
            <div className="absolute top-1/3 left-1/2 w-32 h-0.5 bg-rapidaid-blue transform -translate-y-1/2 rotate-45 opacity-60"></div>
          </div>
        </CardContent>
      </Card>

      {/* Driver Information Card */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-rapidaid-teal">Driver Details</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">Online</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">{ambulanceData.driverName}</p>
                <p className="text-sm text-gray-600">Licensed Paramedic</p>
              </div>
              <div className="w-12 h-12 bg-rapidaid-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RK</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-600">Vehicle Number</p>
                <p className="font-semibold">{ambulanceData.vehicleNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ETA</p>
                <p className="font-semibold text-rapidaid-blue">{ambulanceData.estimatedArrival}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Current Location</p>
              <p className="font-semibold">{ambulanceData.currentLocation}</p>
            </div>
            
            <Button
              className="btn-rapidaid w-full mt-4 flex items-center justify-center space-x-2"
              onClick={() => window.open(`tel:${ambulanceData.phone}`)}
            >
              <Phone className="h-5 w-5" />
              <span>Call Driver</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveMap;
