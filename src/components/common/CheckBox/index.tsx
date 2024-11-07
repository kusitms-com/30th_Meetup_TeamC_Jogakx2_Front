import { Check } from '@/components/Icons'
import { cn } from '@/util'
import Button from '../Button'

interface CheckboxWithLabelProps {
  id: string
  label: string
  isChecked: boolean
  onChange: (id: string) => void
  isRequired?: boolean
}

export default function CheckboxWithLabel({
  id,
  label,
  isChecked,
  onChange,
  isRequired = false,
}: CheckboxWithLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center pb-8 pt-4 border-b-2 w-full',
        isChecked && 'border-black',
      )}
    >
      <Button
        type="button"
        onClick={() => onChange(id)}
        className={cn(
          'w-24 h-24 bg-primary_foundation_5 rounded-lg flex items-center justify-center cursor-pointer mr-12 px-3 py-3',
          isChecked && 'bg-black',
        )}
      >
        {!isChecked && <Check color="#BBBBBE" />}
        {isChecked && <Check />}
      </Button>
      <span className="font-semibold">
        {label}
        {isRequired && <span className="text-[#ea7465] ml-1">*</span>}
      </span>
    </div>
  )
}
