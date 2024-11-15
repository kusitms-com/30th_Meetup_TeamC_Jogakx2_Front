import { SVGProps } from 'react'

export default function Caution({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Danger">
        <path
          id="Rectangle 74"
          d="M1.3335 10.9507C1.3335 10.5458 1.43669 10.1476 1.63333 9.79363L5.75727 2.37054C6.12282 1.71254 6.75887 1.24826 7.49697 1.10064C7.82914 1.0342 8.17118 1.0342 8.50335 1.10064C9.24145 1.24826 9.8775 1.71254 10.2431 2.37054L14.367 9.79363C14.5636 10.1476 14.6668 10.5458 14.6668 10.9507C14.6668 12.2666 13.6001 13.3333 12.2842 13.3333H3.7161C2.40022 13.3333 1.3335 12.2666 1.3335 10.9507Z"
          fill="#FF5D5E"
          stroke="#FF5D5E"
        />
        <g id="Group 231">
          <path
            id="Line"
            d="M8 5.00033L8 7.66699"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M8 9.66667L8 10"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}
