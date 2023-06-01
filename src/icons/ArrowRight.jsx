const SvgArrowRight = (props) => (
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
      d="M10 24h28M24 10l14 14-14 14"
    />
  </svg>
);
export default SvgArrowRight;
