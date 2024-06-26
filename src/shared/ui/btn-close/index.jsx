export default function Close({ width, height, className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.70711"
        y1="1.69853"
        x2="32.1127"
        y2="32.1041"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      <line
        x1="1.29289"
        y1="31.6984"
        x2="31.6985"
        y2="1.29282"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
    </svg>
  );
}
