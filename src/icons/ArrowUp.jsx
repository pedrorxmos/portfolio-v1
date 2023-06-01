const SvgArrowUp = (props) => (
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
      d="M24 38V10M10 24l14-14 14 14"
    />
  </svg>
);
export default SvgArrowUp;
