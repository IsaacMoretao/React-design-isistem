import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: string;
  asChild?: Boolean;
  className?: string;

}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
  const Comp = asChild ? Slot : 'span';

  return(
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className 
      )}
    >
      {children}
      

      
    </Comp>
  )
}