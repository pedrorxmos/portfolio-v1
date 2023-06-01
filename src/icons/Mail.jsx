const SvgMail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4Z"
    />
    <path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M44 12 24 26 4 12"
    />
  </svg>
);
export default SvgMail;
