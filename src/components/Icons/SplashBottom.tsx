import { SVGProps } from 'react'

interface SplashBottomProps extends SVGProps<SVGSVGElement> {
  elementColor?: string
}

export default function SplashBottom({
  elementColor = '#F3F3F4',
  ...props
}: SplashBottomProps) {
  return (
    <svg
      width="292"
      height="291"
      viewBox="0 0 292 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="194" width="97" height="97" fill={elementColor} />
      <rect y="97" width="97" height="97" fill={elementColor} />
      <rect x="97" y="194" width="98" height="97" fill={elementColor} />
      <rect x="97" y="97" width="98" height="97" fill={elementColor} />
      <rect x="97" width="98" height="97" fill={elementColor} />
      <rect x="195" y="194" width="97" height="97" fill={elementColor} />
      <rect width="98" height="97" fill={elementColor} />
    </svg>
  )
}
