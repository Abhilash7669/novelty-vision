type Props = {
  stroke?: string;
};

export default function CaretRight({ stroke= "#000000" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clipPath="url(#clip0_314_88)">
        <path
          d="M8.25 4.125L15.125 11L8.25 17.875"
          stroke={stroke}
          strokeWidth="2.0625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_314_88">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
