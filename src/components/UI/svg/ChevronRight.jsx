const ChevronRight = ({ color = "#e3e3e4", width = 32, height = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M11.8809 26.562L20.5748 17.868C21.6016 16.8413 21.6016 15.1611 20.5748 14.1344L11.8809 5.44043"
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

export default ChevronRight;
