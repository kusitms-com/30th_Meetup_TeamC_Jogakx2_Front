import { SVGProps } from 'react'

interface SplashLogoProps extends SVGProps<SVGSVGElement> {
  firstPieceColor?: string
}

export default function SplashLogo({
  firstPieceColor,
  ...props
}: SplashLogoProps) {
  return (
    <svg
      width="135"
      height="130"
      viewBox="0 0 135 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="80.4658"
        y="33.0205"
        width="13.0343"
        height="26.0411"
        fill="#FF4F38"
      />
      <g filter="url(#filter0_d_32_15599)">
        <rect
          x="67.4863"
          y="20"
          width="13.0068"
          height="13.0206"
          fill="#FF4F38"
        />
        <rect
          x="80.4932"
          y="20"
          width="13.0068"
          height="13.0206"
          fill="#FF4F38"
        />
        <rect
          x="80.4932"
          y="33.0205"
          width="13.0068"
          height="13.0206"
          fill="#FF4F38"
        />
        <rect
          x="80.4932"
          y="46.041"
          width="13.0068"
          height="13.0206"
          fill="#FF4F38"
        />
        <rect
          x="54.4795"
          y="20"
          width="13.0068"
          height="13.0206"
          fill="#FF4F38"
        />
      </g>
      <rect
        x="41.5"
        y="46.041"
        width="26.0686"
        height="13.0206"
        fill={firstPieceColor}
      />
      <rect
        x="67.4771"
        y="72"
        width="12.9885"
        height="12.9931"
        transform="rotate(180 67.4771 72)"
        fill={firstPieceColor}
      />
      <rect
        x="54.4888"
        y="72"
        width="12.9885"
        height="12.9931"
        transform="rotate(180 54.4888 72)"
        fill={firstPieceColor}
      />
      <rect
        x="54.4888"
        y="59.0068"
        width="12.9885"
        height="12.9931"
        transform="rotate(180 54.4888 59.0068)"
        fill={firstPieceColor}
      />
      <rect
        x="67.5688"
        y="46.041"
        width="26.0686"
        height="13.0206"
        transform="rotate(180 67.5688 46.041)"
        fill={firstPieceColor}
      />
      <rect
        x="80.4658"
        y="71.9453"
        width="13.0343"
        height="12.8835"
        transform="rotate(180 80.4658 71.9453)"
        fill={firstPieceColor}
      />
      <path
        d="M0 124.165C4.47414 124.126 9.02678 124.048 13.5402 123.815V115.762H18.6423V123.503C23.3126 123.153 27.9045 122.648 32.1824 121.831V126.499C22.253 128.366 10.8321 128.755 0 128.833V124.165ZM1.17741 117.785V113.117C6.43649 112.533 13.5402 107.281 13.5402 102.458V101.368H1.56987V96.778H30.6126V101.368H18.6423V102.458C18.6423 106.892 25.589 110.977 31.005 111.016V115.684C26.0599 115.684 19.231 112.805 16.209 108.682C13.3047 113.506 6.12251 117.318 1.17741 117.785Z"
        fill={firstPieceColor}
      />
      <path
        d="M33.7492 111.094C41.8341 111.094 48.2706 106.542 48.2706 101.602V101.213H34.5342V96.778H53.3727V100.279C53.3727 109.81 44.3459 115.529 33.7492 115.529V111.094ZM35.3191 125.834V121.311C40.3839 121.311 54.5108 117.551 63.5769 115.529V130H58.4748V121.053C51.0571 122.375 41.7268 125.274 35.3191 125.834ZM58.4748 114.984V96H63.5769V103.002H67.5015V107.67H63.5769V113.934C61.9285 114.362 60.0446 114.712 58.4748 114.984Z"
        fill={firstPieceColor}
      />
      <path
        d="M67.4985 124.165C71.9726 124.126 76.5252 124.048 81.0386 123.815V115.762H86.1407V123.503C90.8111 123.153 95.403 122.648 99.6809 121.831V126.499C89.7514 128.366 78.3306 128.755 67.4985 128.833V124.165ZM68.6759 117.785V113.117C73.935 112.533 81.0386 107.281 81.0386 102.458V101.368H69.0683V96.778H98.111V101.368H86.1407V102.458C86.1407 106.892 93.0874 110.977 98.5035 111.016V115.684C93.5584 115.684 86.7294 112.805 83.7074 108.682C80.8032 113.506 73.621 117.318 68.6759 117.785Z"
        fill="#FF4F38"
      />
      <path
        d="M101.248 111.094C109.333 111.094 115.769 106.542 115.769 101.602V101.213H102.033V96.778H120.871V100.279C120.871 109.81 111.844 115.529 101.248 115.529V111.094ZM102.818 125.878V121.365C112.377 120.491 122.009 117.551 131.075 115.529V130H125.973V121.053C118.556 122.375 111.002 124.774 102.818 125.878ZM125.973 114.984V96H131.075V103.002H135V107.67H131.075V113.934C129.427 114.362 127.543 114.712 125.973 114.984Z"
        fill="#FF4F38"
      />
      <defs>
        <filter
          id="filter0_d_32_15599"
          x="34.4795"
          y="0"
          width="79.0205"
          height="79.0615"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.311 0 0 0 0 0.22 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_32_15599"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_32_15599"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
