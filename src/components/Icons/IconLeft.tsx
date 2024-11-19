import { SVGProps } from 'react'

export default function IconLeft({ ...props }: SVGProps<SVGSVGElement>) {
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
        d="M5.5625 0.854492L1.45348 5.64834C1.15657 5.99475 1.15657 6.5059 1.45348 6.85231L5.5625 11.6462"
        stroke="#31313B"
        strokeWidth="1.15625"
        strokeLinecap="round"
      />
    </svg>
  )
}
