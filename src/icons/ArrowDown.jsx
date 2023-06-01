const SvgArrowDown = (props) => (
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
      d="M24 10v28M38 24 24 38 10 24"
    />
  </svg>
);
export default SvgArrowDown;
