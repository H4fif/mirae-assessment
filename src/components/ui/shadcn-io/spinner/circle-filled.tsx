import { cn } from '@/lib/utils';
import type { SpinnerVariantProps } from '@/types/spinner';
import { LoaderCircleIcon } from 'lucide-react';

const CircleFilled = ({
  className,
  size = 24,
  ...props
}: SpinnerVariantProps) => (
  <div className="relative" style={{ width: size, height: size }}>
    <div className="absolute inset-0 rotate-180">
      <LoaderCircleIcon
        className={cn('animate-spin', className, 'text-foreground opacity-20')}
        size={size}
        {...props}
      />
    </div>

    <LoaderCircleIcon
      className={cn('relative animate-spin', className)}
      size={size}
      {...props}
    />
  </div>
);

export default CircleFilled;
