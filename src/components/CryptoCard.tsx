
import React from 'react';
import { cn } from '@/lib/utils';

interface CryptoCardProps {
  value: string | number;
  className?: string;
  animationDelay?: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  value,
  className,
  animationDelay = '0s',
}) => {
  return (
    <div
      className={cn('crypto-card', className)}
      style={{ animationDelay }}
    >
      <div className="card-label">Crypto Balance</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default CryptoCard;
