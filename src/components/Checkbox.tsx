import * as CheckboxPrimitive from '@Radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {
  children: string;
  asChild?: Boolean;

}

export function Checkbox({ children, asChild }: CheckboxProps) {

  return(
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check size={20} weight="bold" className="text-cyan-500"/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>


  )
}