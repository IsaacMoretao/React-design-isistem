import * as CheckboxPrimitive from '@Radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxIndicatorProps {}

export function Checkbox( props: CheckboxProps ) {

  return(
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] rounded" {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check size={20} weight="bold" className="text-cyan-500"/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>


  )
}