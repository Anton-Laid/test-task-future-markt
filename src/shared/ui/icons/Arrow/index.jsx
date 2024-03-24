export default function Arrow({
  className,
  width,
  height,
  color,
  strokeWidth,
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 4.29346V20.952H4.37326M20.9618 21L1 1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
