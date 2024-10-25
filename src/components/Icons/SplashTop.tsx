import { SVGProps } from 'react'

interface SplashTopProps extends SVGProps<SVGSVGElement> {
  elementColor?: string
}

export default function SplashTop({
  elementColor = '#F3F3F4',
  ...props
}: SplashTopProps) {
  return (
    <svg
      width="293"
      height="291"
      viewBox="0 0 293 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="293"
        y="97"
        width="97"
        height="97"
        transform="rotate(180 293 97)"
        fill={elementColor}
      />
      <rect
        x="196"
        y="97"
        width="98"
        height="97"
        transform="rotate(180 196 97)"
        fill={elementColor}
      />
      <rect
        x="98"
        y="97"
        width="98"
        height="97"
        transform="rotate(180 98 97)"
        fill={elementColor}
      />
      <rect
        x="293"
        y="194"
        width="98"
        height="97"
        transform="rotate(180 293 194)"
        fill={elementColor}
      />
      <rect
        x="293"
        y="291"
        width="98"
        height="97"
        transform="rotate(180 293 291)"
        fill={elementColor}
      />
    </svg>
  )
}
