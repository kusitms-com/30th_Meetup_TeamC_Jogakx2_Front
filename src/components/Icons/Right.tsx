import { SVGProps } from 'react'

interface IRight extends SVGProps<SVGSVGElement> {
  color?: string
}

export default function Right({ color, ...props }: IRight) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="12"
      viewBox="0 0 19 12"
      fill="none"
      {...props}
    >
      <path
        d="M13.6663 10.6667L17.5081 6.82497C17.9637 6.36936 17.9637 5.63066 17.5081 5.17505L13.6663 1.33334M17.1663 6.00001L0.833008 6.00001"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
