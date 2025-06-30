
import React, { useState } from 'react';
import { MapPin, Navigation, Clock, DollarSign, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [ambulanceType, setAmbulanceType] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  const ambulanceTypes = [
    { 
      id: 'basic', 
      name: 'Basic Ambulance', 
      price: '₹500', 
      eta: '8-12 min',
      description: 'Standard medical transport'
    },
    { 
      id: 'icu', 
      name: 'ICU Ambulance', 
      price: '₹1200', 
      eta: '5-10 min',
      description: 'Advanced life support equipment'
    },
    { 
      id: 'nicu', 
      name: 'NICU Ambulance', 
      price: '₹1500', 
      eta: '10-15 min',
      description: 'Neonatal intensive care unit'
    },
    { 
      id: 'cardiac', 
      name: 'Cardiac Ambulance', 
      price: '₹1800', 
      eta: '5-8 min',
      description: 'Specialized cardiac emergency care'
    }
  ];

  const selectedAmbulance = ambulanceTypes.find(type => type.id === ambulanceType);

  const handleBooking = async () => {
    if (!pickup || !destination || !ambulanceType) {
      alert('Please fill all required fields');
      return;
    }

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert('Ambulance booked successfully! Driver will contact you shortly.');
    }, 2000);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPickup(`Current Location (${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)})`);
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Ambulance className="h-6 w-6" />
            <span>Book Emergency Ambulance</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Location Inputs */}
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-rapidaid-blue" />
              <Input
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-12 h-12 rounded-2xl border-2 border-gray-200 focus:border-rapidaid-blue transition-colors"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={getCurrentLocation}
                className="absolute right-2 top-2 text-rapidaid-blue hover:bg-rapidaid-light"
              >
                <Navigation className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-emergency" />
              <Input
                placeholder="Destination (Hospital/Medical Center)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 h-12 rounded-2xl border-2 border-gray-200 focus:border-rapidaid-blue transition-colors"
              />
            </div>
          </div>

          {/* Ambulance Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Select Ambulance Type</label>
            <Select value={ambulanceType} onValueChange={setAmbulanceType}>
              <SelectTrigger className="h-12 rounded-2xl border-2 border-gray-200 focus:border-rapidaid-blue">
                <SelectValue placeholder="Choose ambulance type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {ambulanceTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id} className="p-3">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center w-full">
                        <span className="font-medium">{type.name}</span>
                        <span className="text-rapidaid-blue font-bold">{type.price}</span>
                      </div>
                      <span className="text-xs text-gray-500">{type.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Fare and ETA Display */}
          {selectedAmbulance && (
            <div className="bg-rapidaid-gradient-soft rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-rapidaid-blue" />
                  <span className="font-medium">Estimated Arrival</span>
                </div>
                <span className="font-bold text-rapidaid-teal">{selectedAmbulance.eta}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-rapidaid-blue" />
                  <span className="font-medium">Estimated Fare</span>
                </div>
                <span className="font-bold text-rapidaid-teal">{selectedAmbulance.price}</span>
              </div>
            </div>
          )}

          {/* Book Button */}
          <Button
            onClick={handleBooking}
            disabled={!pickup || !destination || !ambulanceType || isBooking}
            className="btn-rapidaid w-full h-14 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isBooking ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Booking Ambulance...</span>
              </div>
            ) : (
              'Book Emergency Ambulance'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
