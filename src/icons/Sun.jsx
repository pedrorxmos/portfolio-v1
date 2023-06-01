const SvgSun = (props) => (
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
    <path d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM24 2v4M24 42v4M8.44 8.44l2.84 2.84M36.72 36.72l2.84 2.84M2 24h4M42 24h4M8.44 39.56l2.84-2.84M36.72 11.28l2.84-2.84" />
  </svg>
);
export default SvgSun;
