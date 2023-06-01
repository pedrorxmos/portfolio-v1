const SvgHash = (props) => (
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
      d="M8 18h32M8 30h32M20 6l-4 36M32 6l-4 36"
    />
  </svg>
);
export default SvgHash;
