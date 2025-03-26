
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  alt = 'Profile picture',
  size = 110,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full profile-image',
        !isLoaded && 'animate-pulse bg-secondary',
        className
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ProfileImage;
