import React from 'react';

const PopOutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 36 36" version="1.1"
         preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <title>pop-out-line</title>
        <path className="clr-i-outline clr-i-outline-path-1"
              d="M27,33H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7H15V9H5V31H27V21h2V31A2,2,0,0,1,27,33Z"></path>
        <path className="clr-i-outline clr-i-outline-path-2"
              d="M18,3a1,1,0,0,0,0,2H29.59L15.74,18.85a1,1,0,1,0,1.41,1.41L31,6.41V18a1,1,0,0,0,2,0V3Z"></path>
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
);

export default PopOutIcon;