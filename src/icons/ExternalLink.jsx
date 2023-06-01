const SvgExternalLink = (props) => (
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
      d="M36 26v12a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h12M30 6h12v12M20 28 42 6"
    />
  </svg>
);
export default SvgExternalLink;
