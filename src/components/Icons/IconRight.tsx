import { SVGProps } from 'react'

export default function IconRight({
  color,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      {...props}
    >
      <path
        d="M1.4375 0.854492L5.54652 5.64834C5.84343 5.99475 5.84343 6.5059 5.54652 6.85231L1.4375 11.6462"
        stroke={color || '#31313B'}
        strokeWidth="1.15625"
        strokeLinecap="round"
      />
    </svg>
  )
}
