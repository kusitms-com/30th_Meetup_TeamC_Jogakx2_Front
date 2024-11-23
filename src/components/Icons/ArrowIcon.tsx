import { SVGProps } from 'react'

export default function ArrowIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.6668 18.6663L22.5085 14.8246C22.9642 14.369 22.9642 13.6303 22.5085 13.1747L18.6668 9.33301M22.1668 13.9997L5.8335 13.9997"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
