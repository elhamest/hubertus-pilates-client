// <
const ChevronLeft = ({ color = "#e3e3e4", width = 32, height = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M20.1191 26.562L11.4252 17.868C10.3984 16.8413 10.3984 15.1611 11.4252 14.1344L20.1191 5.44043"
        stroke={color}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
