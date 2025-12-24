import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <Image
        src="/logo-mobile.svg"
        alt="Logo"
        width={121}
        height={20}
        className={cn('lg:hidden', className)}
        onClick={onClick}
      />
      <Image
        src="/logo-desktop.svg"
        alt="Logo"
        width={121}
        height={20}
        className={cn('hidden lg:block', className)}
      />
    </>
  );
};

export default Logo;
