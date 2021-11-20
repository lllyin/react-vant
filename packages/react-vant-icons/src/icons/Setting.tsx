import * as React from 'react';

function SvgSetting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M598.11 52.192c94.333 20.572 177.813 70.193 240.596 139.02-20.97 33.7-23.15 77.568-1.918 114.344 21.253 36.812 60.39 56.861 100.101 55.51 13.931 43.818 21.444 90.499 21.444 138.934s-7.513 95.116-21.437 138.94c-39.717-1.357-78.855 18.692-100.108 55.504-21.233 36.776-19.053 80.645 1.915 114.346-62.78 68.825-146.26 118.446-240.592 139.018l-.002-.012c-18.69-35.05-55.614-58.907-98.109-58.907s-79.419 23.856-98.109 58.907l-.001.013c-94.333-20.573-177.813-70.194-240.596-139.02 20.97-33.7 23.15-77.569 1.918-114.345-21.253-36.812-60.391-56.861-100.102-55.51C49.18 595.117 41.667 548.436 41.667 500s7.513-95.116 21.437-138.94c39.717 1.357 78.855-18.692 100.108-55.504 21.233-36.776 19.053-80.645-1.915-114.346 62.78-68.825 146.26-118.446 240.593-139.019l.002.014c18.69 35.05 55.613 58.906 98.108 58.906 42.342 0 79.152-23.684 97.905-58.527zM500 388.889c-61.365 0-111.111 49.746-111.111 111.111S438.635 611.111 500 611.111 611.111 561.365 611.111 500 561.365 388.889 500 388.889z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSetting;
