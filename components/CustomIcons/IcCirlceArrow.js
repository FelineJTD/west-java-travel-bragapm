import * as React from "react";

function IcCirlceArrow({ className }) {
  return (
    <svg width={24} height={24} className={`${className ?? ''} fill-current`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.52-4.49 10-10 10l-.28-.004C6.33 21.848 2 17.426 2 12 2 6.49 6.48 2 12 2c5.51 0 10 4.49 10 10zM10.02 8c-.29.3-.29.77.01 1.06L12.98 12l-2.95 2.94c-.3.29-.3.77-.01 1.06.3.3.77.3 1.06 0l3.49-3.47a.75.75 0 000-1.06L11.08 8a.704.704 0 00-.52-.22c-.2 0-.39.07-.54.22z"
      />
    </svg>
  );
}

const MemoIcCirlceArrow = React.memo(IcCirlceArrow);
export default MemoIcCirlceArrow;
