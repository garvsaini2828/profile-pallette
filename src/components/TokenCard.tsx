
import React from 'react';
import { cn } from '@/lib/utils';

interface TokenCardProps {
  label: string;
  value: string | number;
  className?: string;
  animationDelay?: string;
}

const TokenCard: React.FC<TokenCardProps> = ({
  label,
  value,
  className,
  animationDelay = '0s',
}) => {
  return (
    <div
      className={cn('token-card', className)}
      style={{ animationDelay }}
    >
      <div className="card-label">{label}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default TokenCard;
