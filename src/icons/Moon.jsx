const SvgMoon = (props) => (
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
      d="M42 25.58A18 18 0 1 1 22.42 6 14 14 0 0 0 42 25.58Z"
    />
  </svg>
);
export default SvgMoon;
