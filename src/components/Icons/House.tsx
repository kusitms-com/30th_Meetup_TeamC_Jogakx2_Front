import { SVGProps } from 'react'

export default function House({
  color,
  ...props
}: { color?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <path
        d="M1.5 9.93841C1.5 8.71422 2.06058 7.55744 3.02142 6.79888L8.52142 2.45677C9.97466 1.30948 12.0253 1.30948 13.4786 2.45677L18.9786 6.79888C19.9394 7.55744 20.5 8.71422 20.5 9.93841V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H14H8H5.5C3.29086 20.5 1.5 18.7091 1.5 16.5L1.5 9.93841Z"
        fill={color || 'white'}
        stroke={color || 'white'}
        strokeWidth="1.5"
      />
    </svg>
  )
}
