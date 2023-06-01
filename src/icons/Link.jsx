const SvgLink = (props) => (
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
      d="M30 14h6a10 10 0 0 1 0 20h-6m-12 0h-6a10 10 0 0 1 0-20h6M16 24h16"
    />
  </svg>
);
export default SvgLink;
