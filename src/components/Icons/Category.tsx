import { SVGProps } from 'react'

export default function Category({
  color,
  ...props
}: { color?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      {...props}
    >
      <rect
        x="1.5"
        y="1"
        width="7"
        height="7"
        rx="2.5"
        fill="#484851"
        stroke="#484851"
        strokeWidth="1.5"
      />
      <rect
        x="1.5"
        y="11"
        width="7"
        height="7"
        rx="2.5"
        fill="#484851"
        stroke="#484851"
        strokeWidth="1.5"
      />
      <rect
        x="11.5"
        y="1"
        width="7"
        height="7"
        rx="2.5"
        fill="#484851"
        stroke="#484851"
        strokeWidth="1.5"
      />
      <rect
        x="11.5"
        y="11"
        width="7"
        height="7"
        rx="2.5"
        fill="#484851"
        stroke="#484851"
        strokeWidth="1.5"
      />
    </svg>
  )
}
