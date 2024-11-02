import { SVGProps } from 'react'

export default function Logo({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect
        x="17.9839"
        y="6.00952"
        width="6.01583"
        height="12.0188"
        fill="#FF4F38"
      />
      <rect
        x="11.9937"
        y="-3.05176e-05"
        width="6.00317"
        height="6.00942"
        fill="#FF4F38"
      />
      <rect
        x="17.9971"
        y="-3.05176e-05"
        width="6.00317"
        height="6.00942"
        fill="#FF4F38"
      />
      <rect
        x="17.9971"
        y="6.00952"
        width="6.00317"
        height="6.00942"
        fill="#FF4F38"
      />
      <rect
        x="17.9971"
        y="12.019"
        width="6.00317"
        height="6.00942"
        fill="#FF4F38"
      />
      <rect x="5.99072" width="6.00317" height="6.00942" fill="#FF4F38" />
      <rect y="12.019" width="12.0317" height="6.00942" fill="white" />
      <rect
        x="11.9897"
        y="24"
        width="5.99473"
        height="5.99677"
        transform="rotate(180 11.9897 24)"
        fill="white"
      />
      <rect
        x="5.99512"
        y="24"
        width="5.99473"
        height="5.99677"
        transform="rotate(180 5.99512 24)"
        fill="white"
      />
      <rect
        x="5.99512"
        y="18.0031"
        width="5.99473"
        height="5.99677"
        transform="rotate(180 5.99512 18.0031)"
        fill="white"
      />
      <rect
        x="12.0322"
        y="12.019"
        width="12.0317"
        height="6.00942"
        transform="rotate(180 12.0322 12.019)"
        fill="white"
      />
      <rect
        x="17.9844"
        y="23.9747"
        width="6.01583"
        height="5.94616"
        transform="rotate(180 17.9844 23.9747)"
        fill="white"
      />
    </svg>
  )
}
