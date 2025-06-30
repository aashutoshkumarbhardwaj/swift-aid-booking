
import React from 'react';
import { Clock, MapPin, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RideHistory = () => {
  const rideHistory = [
    {
      id: 1,
      date: '2024-01-15',
      time: '14:30',
      from: 'Home - Bandra West',
      to: 'Lilavati Hospital',
      ambulanceType: 'ICU Ambulance',
      fare: '₹1,200',
      status: 'Completed',
      rating: 5,
      duration: '18 mins'
    },
    {
      id: 2,
      date: '2024-01-10',
      time: '09:15',
      from: 'Office - Andheri East',
      to: 'Kokilaben Hospital',
      ambulanceType: 'Basic Ambulance',
      fare: '₹650',
      status: 'Completed',
      rating: 4,
      duration: '22 mins'
    },
    {
      id: 3,
      date: '2024-01-05',
      time: '22:45',
      from: 'Restaurant - Juhu',
      to: 'Nanavati Hospital',
      ambulanceType: 'Cardiac Ambulance',
      fare: '₹1,800',
      status: 'Completed',
      rating: 5,
      duration: '15 mins'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success text-white';
      case 'Cancelled':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-rapidaid-blue text-white';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Clock className="h-6 w-6" />
            <span>Ride History</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {rideHistory.map((ride) => (
            <Card key={ride.id} className="border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-rapidaid-blue" />
                    <span className="text-sm font-medium text-gray-600">
                      {ride.date} at {ride.time}
                    </span>
                  </div>
                  <Badge className={getStatusColor(ride.status)}>
                    {ride.status}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex flex-col items-center space-y-1 mt-1">
                      <div className="w-3 h-3 bg-rapidaid-blue rounded-full"></div>
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                      <MapPin className="h-3 w-3 text-emergency" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="font-medium text-gray-800">{ride.from}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">To</p>
                        <p className="font-medium text-gray-800">{ride.to}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-600">Ambulance Type</p>
                      <p className="text-sm font-medium">{ride.ambulanceType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="text-sm font-medium">{ride.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Fare</p>
                      <p className="text-sm font-medium text-rapidaid-blue">{ride.fare}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Rating</p>
                      <div className="flex items-center space-x-1">
                        {renderStars(ride.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RideHistory;
