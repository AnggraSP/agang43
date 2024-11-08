import * as React from "react";

function Plastik(props) {
  return (
    <>
      <div className="flex h-20 flex-col items-center justify-between">
        <svg
          width={44}
          height={46}
          viewBox="0 0 44 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8.126 0h1.446l1.736 5.497 1.157 2.314 1.158 1.447 3.182 2.025 3.472.868h2.893l3.471-.868 2.604-1.447 2.315-2.603 1.446-3.183.868-3.76h2.893l1.447.867.578 4.34 1.157 11.861 1.736 10.994 1.736 8.39v2.893l-1.446 2.893-2.026 1.736-2.603.868-9.258.578h-12.73l-8.968-.578-3.182-1.157-1.447-1.158-1.157-2.314-.29-1.157V37.03l2.604-14.465L4.654 7.81l.579-6.364L6.1.579 8.126 0z"
            fill="#8EB4C8"
          />
          <path
            d="M32.428 5.497h.578l-.29 2.314-2.314 4.63-2.603 2.892-2.893 1.736-2.026.579h-2.025l-2.893-.868-2.604-1.736-2.314-3.182-1.447-2.893-.578-2.894h.578l1.158 2.026L14.2 9.547l2.604 1.736 3.472.868h2.893l3.471-.868 2.604-1.447 2.315-2.603.868-1.736z"
            fill="#418BC1"
          />
        </svg>
        <span className="font-poppins text-center text-xs">Plastik</span>
      </div>
    </>
  );  
}

export default Plastik;
