import { IconProps } from "@/types"

export const Icons = {
    burger: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50"
        height="50"
        {...props}
      >
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
      </svg>
    ),
    cancel: (props: IconProps) => (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          x="2.68701"
          width="27.3715"
          height="3.8"
          transform="rotate(45 2.68701 0)"
          fill="#828282"
        />
        <rect
          x="0.831299"
          y="19.5566"
          width="27.3715"
          height="3.8"
          transform="rotate(-45 0.831299 19.5566)"
          fill="#828282"
        />
      </svg>
    ),
}