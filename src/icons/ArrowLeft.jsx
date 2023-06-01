const SvgArrowLeft = (props) => (
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
      d="M38 24H10M24 38 10 24l14-14"
    />
  </svg>
);
export default SvgArrowLeft;
