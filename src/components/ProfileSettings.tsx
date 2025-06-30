
import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Users, Shield, Bell, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '+91 98765 43210',
    email: 'john.doe@email.com',
    address: '123 Main Street, Bandra West, Mumbai',
    emergencyContacts: [
      { name: 'Jane Doe', relation: 'Spouse', phone: '+91 98765 43211' },
      { name: 'Dr. Smith', relation: 'Family Doctor', phone: '+91 98765 43212' }
    ],
    notifications: {
      sms: true,
      email: true,
      push: true
    }
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
      duration: 3000,
    });
  };

  const handleNotificationChange = (type: keyof typeof profile.notifications, checked: boolean) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: checked
      }
    }));
    
    toast({
      title: "Notification Settings Updated",
      description: `${type.toUpperCase()} notifications ${checked ? 'enabled' : 'disabled'}.`,
      duration: 2000,
    });
  };

  const handleAddEmergencyContact = () => {
    toast({
      title: "Add Emergency Contact",
      description: "This feature will be available soon.",
      duration: 2000,
    });
  };

  const handleSecurityAction = (action: string) => {
    toast({
      title: "Security Action",
      description: `${action} feature will be available soon.`,
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <User className="h-6 w-6" />
            <span>Personal Information</span>
          </CardTitle>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="rounded-xl"
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                disabled={!isEditing}
                className="h-12 rounded-2xl"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <Input
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                disabled={!isEditing}
                className="h-12 rounded-2xl"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                disabled={!isEditing}
                className="h-12 rounded-2xl"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <Input
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                disabled={!isEditing}
                className="h-12 rounded-2xl"
              />
            </div>
          </div>
          
          {isEditing && (
            <Button onClick={handleSave} className="btn-rapidaid">
              Save Changes
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span>Emergency Contacts</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {profile.emergencyContacts.map((contact, index) => (
            <Card key={index} className="border border-gray-200 rounded-2xl">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                    <p className="text-sm text-rapidaid-blue font-medium">{contact.phone}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-rapidaid-blue"
                    onClick={() => window.open(`tel:${contact.phone}`)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-2xl border-dashed border-2 text-rapidaid-blue border-rapidaid-blue hover:bg-rapidaid-light"
            onClick={handleAddEmergencyContact}
          >
            + Add Emergency Contact
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Bell className="h-6 w-6" />
            <span>Notification Settings</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">SMS Notifications</p>
              <p className="text-sm text-gray-600">Receive booking confirmations via SMS</p>
            </div>
            <Switch
              checked={profile.notifications.sms}
              onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive ride receipts and updates via email</p>
            </div>
            <Switch
              checked={profile.notifications.email}
              onCheckedChange={(checked) => handleNotificationChange('email', checked)}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Push Notifications</p>
              <p className="text-sm text-gray-600">Receive real-time updates on your device</p>
            </div>
            <Switch
              checked={profile.notifications.push}
              onCheckedChange={(checked) => handleNotificationChange('push', checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="shadow-lg border-0 bg-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-rapidaid-teal flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>Security</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-2xl justify-start"
            onClick={() => handleSecurityAction('Change Password')}
          >
            Change Password
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-2xl justify-start"
            onClick={() => handleSecurityAction('Two-Factor Authentication')}
          >
            Two-Factor Authentication
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-2xl justify-start text-emergency border-emergency hover:bg-red-50"
            onClick={() => handleSecurityAction('Delete Account')}
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
