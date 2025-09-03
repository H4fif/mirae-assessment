import type { LucideProps } from 'lucide-react';

export type SpinnerProps = LucideProps & {
  variant?:
    | 'default'
    | 'circle'
    | 'pinwheel'
    | 'circle-filled'
    | 'ellipsis'
    | 'ring'
    | 'bars'
    | 'infinite';
};
export type SpinnerVariantProps = Omit<SpinnerProps, 'variant'>;
