import * as React from 'react';

function SvgScan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#323233" fillRule="nonzero">
        <path d="M111.111 305.556v-138.89c0-30.682 24.873-55.555 55.556-55.555h138.889c15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778h-138.89v138.889c0 15.34-12.436 27.777-27.777 27.777-15.341 0-27.778-12.436-27.778-27.777zm55.556 388.888v138.89h138.889c15.34 0 27.777 12.436 27.777 27.777 0 15.341-12.436 27.778-27.777 27.778h-138.89c-30.682 0-55.555-24.873-55.555-55.556V694.444c0-15.34 12.437-27.777 27.778-27.777s27.778 12.436 27.778 27.777zm666.666-388.888v-138.89H694.444c-15.34 0-27.777-12.436-27.777-27.777 0-15.341 12.436-27.778 27.777-27.778h138.89c30.682 0 55.555 24.873 55.555 55.556v138.889c0 15.34-12.437 27.777-27.778 27.777s-27.778-12.436-27.778-27.777zm55.556 388.888v138.89c0 30.682-24.873 55.555-55.556 55.555H694.444c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h138.89V694.444c0-15.34 12.436-27.777 27.777-27.777 15.341 0 27.778 12.436 27.778 27.777zM138.889 472.222H861.11c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H138.89c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778z" />
      </g>
    </svg>
  );
}

export default SvgScan;
