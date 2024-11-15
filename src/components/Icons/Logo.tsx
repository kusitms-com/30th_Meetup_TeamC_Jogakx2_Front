import { SVGProps } from 'react'

export default function Logo({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <ellipse
        cx="6.61382"
        cy="2.98679"
        rx="6.61382"
        ry="2.98679"
        transform="matrix(-0.997349 -0.0727717 -0.069464 0.997585 22.9653 16.1428)"
        fill="#1A1A25"
      />
      <ellipse
        cx="4.54644"
        cy="2.17857"
        rx="4.54644"
        ry="2.17857"
        transform="matrix(-0.876446 -0.4815 -0.464336 0.885659 18.521 25.1412)"
        fill="#1A1A25"
      />
      <ellipse
        cx="8.16227"
        cy="5.08315"
        rx="8.16227"
        ry="5.08315"
        transform="matrix(0.71326 -0.7009 0.684052 0.729434 6.30273 15.5643)"
        fill="#1A1A25"
      />
      <ellipse
        cx="9.9513"
        cy="6.88615"
        rx="9.9513"
        ry="6.88615"
        transform="matrix(0.738779 -0.673948 0.656612 0.754228 1.05957 12.4127)"
        fill="#FF4F38"
      />
      <path
        d="M11.1367 10.8336L17.1037 10.363"
        stroke="white"
        strokeWidth="0.949259"
        strokeLinecap="round"
      />
      <path
        d="M14.1989 5.14835L11.4155 11.6387"
        stroke="white"
        strokeWidth="0.949259"
        strokeLinecap="round"
      />
    </svg>
  )
}
