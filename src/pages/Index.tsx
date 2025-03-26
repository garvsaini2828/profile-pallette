
import React, { useState } from 'react';
import ProfileImage from '@/components/ProfileImage';
import ProfileInput from '@/components/ProfileInput';
import TokenCard from '@/components/TokenCard';
import CryptoCard from '@/components/CryptoCard';
import WalletButton from '@/components/WalletButton';
import { toast } from 'sonner';

const Index = () => {
  const [userName, setUserName] = useState('John Appleseed');
  const [userId, setUserId] = useState('john.appleseed21');
  
  const handleWalletOpen = () => {
    toast.success("Wallet opened successfully!", {
      description: "Your crypto wallet is now accessible.",
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-xl profile-card">
        <div className="p-6 sm:p-8">
          {/* Header with profile image and user inputs */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <ProfileImage />
            
            <div className="flex-1 space-y-4 w-full">
              <ProfileInput 
                label="User Name" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
              />
              <ProfileInput 
                label="User ID" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your ID"
              />
            </div>
          </div>
          
          {/* Token cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <TokenCard 
              label="Remaining Token" 
              value="3,450"
              animationDelay="0.1s"
            />
            <TokenCard 
              label="Used Token" 
              value="1,250"
              animationDelay="0.2s"
            />
          </div>
          
          {/* Crypto balance */}
          <div className="mb-8">
            <CryptoCard 
              value="$2,345.00"
              animationDelay="0.3s"
            />
          </div>
          
          {/* Footer with wallet button */}
          <div className="flex justify-end">
            <WalletButton onClick={handleWalletOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
