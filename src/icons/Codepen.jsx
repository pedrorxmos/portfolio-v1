const SvgCodepen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="m24 4 20 13v14L24 44 4 31V17L24 4ZM24 44V31" />
    <path d="M44 17 24 31 4 17" />
    <path d="m4 31 20-14 20 14M24 4v13" />
  </svg>
);
export default SvgCodepen;
