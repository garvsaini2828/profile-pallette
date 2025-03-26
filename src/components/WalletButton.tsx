
import React from 'react';
import { cn } from '@/lib/utils';
import { Wallet2 } from 'lucide-react';

interface WalletButtonProps {
  onClick?: () => void;
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn('wallet-button flex items-center space-x-2', className)}
    >
      <Wallet2 size={18} />
      <span>Open Wallet</span>
    </button>
  );
};

export default WalletButton;
