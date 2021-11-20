import * as React from 'react';

function SvgPauseCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M500 944.444C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444zm-90.278-611.11c-19.176 0-34.722 15.545-34.722 34.722v263.888c0 19.177 15.546 34.723 34.722 34.723 19.177 0 34.722-15.546 34.722-34.723V368.056c0-19.177-15.545-34.723-34.722-34.723zm180.556 0c-19.177 0-34.722 15.545-34.722 34.722v263.888c0 19.177 15.545 34.723 34.722 34.723 19.176 0 34.722-15.546 34.722-34.723V368.056c0-19.177-15.546-34.723-34.722-34.723z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPauseCircle;
