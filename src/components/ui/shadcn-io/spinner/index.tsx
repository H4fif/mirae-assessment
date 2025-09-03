import { LoaderCircleIcon, LoaderIcon, LoaderPinwheelIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SpinnerProps, SpinnerVariantProps } from '@/types/spinner';
import CircleFilled from './circle-filled';
import Ellipsis from './ellipsis';
import Ring from './ring';
import Bars from './bars';
import Infinite from './infinite';

const Default = ({ className, ...props }: SpinnerVariantProps) => (
  <LoaderIcon className={cn('animate-spin', className)} {...props} />
);

const Circle = ({ className, ...props }: SpinnerVariantProps) => (
  <LoaderCircleIcon className={cn('animate-spin', className)} {...props} />
);

const Pinwheel = ({ className, ...props }: SpinnerVariantProps) => (
  <LoaderPinwheelIcon className={cn('animate-spin', className)} {...props} />
);

export const Spinner = ({ variant, ...props }: SpinnerProps) => {
  switch (variant) {
    case 'circle':
      return <Circle {...props} />;
    case 'pinwheel':
      return <Pinwheel {...props} />;
    case 'circle-filled':
      return <CircleFilled {...props} />;
    case 'ellipsis':
      return <Ellipsis {...props} />;
    case 'ring':
      return <Ring {...props} />;
    case 'bars':
      return <Bars {...props} />;
    case 'infinite':
      return <Infinite {...props} />;
    default:
      return <Default {...props} />;
  }
};
