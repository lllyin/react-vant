import * as React from 'react';

function SvgBrushO(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M777.778 55.556c37.037 0 55.555 18.518 55.555 55.555V500c0 55.556-194.444 27.778-222.222 83.333-27.778 55.556 0 194.445 0 222.223 0 27.777 0 138.888-111.111 138.888s-111.111-111.11-111.111-138.888c0-27.778 27.778-166.667 0-222.223C361.11 527.778 166.667 555.556 166.667 500V111.111c0-37.037 18.518-55.555 55.555-55.555h555.556zm0 222.222H222.222v200.19c10.722 2.676 25.81 5.074 52.482 8.63 6.01.8 6.01.8 12.15 1.625 91.504 12.353 128.37 23.555 151.725 70.265 16.202 32.404 20.195 74.58 17.459 129.643-1.017 20.472-2.926 41.387-5.787 66.18-.414 3.59-1.196 10.113-1.98 16.613l-.176 1.46c-.978 8.1-1.915 15.817-2.097 17.373-1.06 9.071-1.554 14.543-1.554 15.799 0 56.04 12.131 83.333 55.556 83.333 29.684 0 41.82-10.195 49.474-34.007 4.727-14.707 6.082-29.189 6.082-49.326 0-1.256-.494-6.728-1.554-15.799-.338-2.895-3.29-27.1-4.253-35.447-2.86-24.792-4.77-45.707-5.787-66.179-2.736-55.063 1.257-97.239 17.459-129.643 23.355-46.71 60.221-57.912 151.725-70.265l5.732-.77.783-.104 5.635-.75c26.671-3.557 41.76-5.955 52.482-8.631v-200.19zm0-166.667H222.222v111.111h555.556v-111.11z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBrushO;
