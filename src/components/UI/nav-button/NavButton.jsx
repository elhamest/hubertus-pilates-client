// export function NavButton({ onClick, label, children }) {
//   return (
//     <button
//       className="group relative w-14 h-14 flex items-center justify-center"
//       onClick={onClick}
//       aria-label={label}
//     >
//       <div className="absolute inset-0 rounded-full border border-gray-300" />
//       <svg
//         className="absolute inset-0 w-full h-full -rotate-90"
//         viewBox="0 0 56 56"
//       >
//         <circle
//           cx="28"
//           cy="28"
//           r="27"
//           fill="none"
//           stroke="rgb(75 85 99)"
//           strokeWidth="2"
//           className="transition-all duration-700 ease-in-out"
//           style={{
//             strokeDasharray: "170",
//             strokeDashoffset: "170",
//             transform: "rotate(-90deg)",
//             transformOrigin: "center",
//           }}
//         />
//       </svg>
//       {/* <Icon className="w-6 h-6 text-gray-600 relative z-10" /> */}
//     </button>
//   );
// }

import React, { useState } from "react";
import styles from "./NavButton.module.css";

export function NavButton({ onClick, label, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`group relative w-14 h-14 flex items-center justify-center hover:bg-gray-50 transition-colors ${styles.navButton}`}
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full border border-gray-300" />
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r="27"
          fill="none"
          stroke="var(--primary-color)"
          strokeWidth="1"
          className="transition-all duration-700 ease-in-out"
          style={{
            strokeDasharray: "170",
            strokeDashoffset: isHovered ? "0" : "170",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      {children}
    </button>
  );
}
